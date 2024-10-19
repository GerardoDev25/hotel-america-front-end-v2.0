'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { IUser } from '@/interfaces';
import { CronService } from '@/services';
import { customFetch } from '@/actions/fetch';
import { decodeToken, logOut } from './';

export interface ApiResponse {
  ok: boolean;
  user?: IUser;
  token?: string;
  errors?: string[];
}

const setNewToken = (resp: ApiResponse) => {
  const job = CronService.getInstance();

  if (resp.ok) {
    cookies().set('token', resp.token!);
  } else {
    logOut();
    job.stopJob('refresh-token');
    redirect(`/auth/login?errorMessage=${encodeURIComponent(resp.errors![0])}`);
  }
};

const getNewToken = async () => {
  const token = cookies().get('token')?.value;

  if (token === undefined || token.length === 0) {
    redirect(
      `/auth/login?errorMessage=${encodeURIComponent(
        'token invalid or expired'
      )}`
    );
  }

  const resp: ApiResponse = await customFetch({
    url: '/auth/refresh-token',
    data: { token },
    method: 'POST',
  });

  setNewToken(resp);
};

export const refreshToken = async () => {
  const { ok, error, tokenDecoded } = await decodeToken();

  if (!ok) {
    redirect(`/auth/login?errorMessage=${encodeURIComponent(error ?? '')}`);
  }

  const AN_HOUR = 3600000;
  const nowPlusAnHour = Math.floor(Date.now() / 1000) + AN_HOUR;
  const timeTokenExpired = tokenDecoded!.exp - nowPlusAnHour;

  if (timeTokenExpired > 0) {
    getNewToken();
  }

  const job = CronService.getInstance();
  job.startJob('refresh-token', '0 * * * *', getNewToken);
};
