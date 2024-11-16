'use server';

import { cookies } from 'next/headers';
import { IUser } from '@/interfaces';
import { CronService } from '@/services';
import { customFetch } from '@/actions/fetch';

interface Params {
  username: string;
  password: string;
}

export interface ApiResponse {
  ok: boolean;
  user?: IUser;
  token?: string;
  errors?: string[];
}

export const login = async (data: Params) => {
  const resp: ApiResponse = await customFetch({
    url: 'api/auth/login',
    data,
    method: 'POST',
  });

  if (resp.ok) {
    cookies().set('token', resp.token!);
  }

  return resp;
};

export const logOut = () => {
  const job = CronService.getInstance();
  job.stopJob('refresh-token');
  cookies().set('token', '');
};

export const refresh = async () => {
  const token = cookies().get('token')?.value ?? '';

  const resp: ApiResponse = await customFetch({
    url: 'api/auth/refresh-token',
    data: { token },
    method: 'POST',
  });

  if (resp.ok) {
    cookies().set('token', resp.token!);
    console.log('token refreshed');
  }

  if (resp.errors) {
    resp.errors.push('please Log-out and Log-in again');
  }

  return resp;
};
