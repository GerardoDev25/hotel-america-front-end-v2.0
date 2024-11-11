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
    url: '/auth/login',
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
