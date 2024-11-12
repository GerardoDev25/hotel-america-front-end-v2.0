'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

import { IUser } from '@/interfaces';
import { CronService } from '@/services';
import { customFetch } from '@/actions/fetch';
import { Session } from './';

interface DecodeTokenReturn {
  ok: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

type TokenDecoded = {
  id: string;
  iat: number;
  exp: number;
};

interface ApiResponse {
  ok: boolean;
  user?: IUser;
  token?: string;
  errors?: string[];
}

interface VerifyTokenExpiredReturn {
  isTokenExpired: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

export const decodeToken = async (): Promise<DecodeTokenReturn> => {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw 'No Authentication token provided';

    const tokenDecoded = jwtDecode<TokenDecoded>(token);
    if (!tokenDecoded) throw 'Invalid Authentication token';

    return { ok: true, tokenDecoded };
  } catch (error) {
    return { ok: false, error: (error as Error).message };
  }
};

const setNewToken = (resp: ApiResponse) => {
  const job = CronService.getInstance();

  if (resp.ok) {
    cookies().set('token', resp.token!);
    console.log('token refreshed');
  } else {
    Session.logOut();
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
    url: 'api/auth/refresh-token',
    data: { token },
    method: 'POST',
  });

  setNewToken(resp);
};

export const refreshToken = (tokenDecoded: TokenDecoded) => {
  const AN_HOUR = 3600000;
  const nowPlusAnHour = Math.floor(Date.now() / 1000) + AN_HOUR;
  const timeTokenExpired = tokenDecoded!.exp - nowPlusAnHour;

  if (timeTokenExpired > 0) {
    getNewToken();
  }

  const job = CronService.getInstance();
  job.startJob('refresh-token', '0 * * * *', getNewToken);
};

export const verifyTokenExpired =
  async (): Promise<VerifyTokenExpiredReturn> => {
    const { ok, tokenDecoded, error } = await decodeToken();
    if (!ok) return { isTokenExpired: true, error };

    const currentTime = Math.floor(Date.now() / 1000);

    return tokenDecoded!.exp < currentTime
      ? { isTokenExpired: true, error: 'Authentication Token expired' }
      : { isTokenExpired: false, tokenDecoded };
  };
