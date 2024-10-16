'use server';

import { IUser } from '@/interfaces';
import { customFetch } from '../fetch';
import { cookies } from 'next/headers';
// import { sleep } from '@/utils';

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
  // await sleep(2);
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

export const logOut = async () => {
  cookies().set('token', '');
  return true;
};
