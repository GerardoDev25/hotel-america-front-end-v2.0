'use server';

import { cookies } from 'next/headers';
import { envs } from '@/config/envs';

interface Params {
  url: string;
  data?: unknown;
  method?: METHOD;
  isAuth?: boolean;
  isCache?: boolean;
}

type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const customFetch = async (params: Params) => {
  const { url, data, method = 'GET', isAuth = false, isCache = false } = params;

  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (isAuth) {
    const token = cookies().get('token');
    headers.append('Authorization', `Bearer ${token}`);
  }

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };
  try {
    const resp = await fetch(`${envs.BACK_END_URL}${url}`, {
      ...requestOptions,
      cache: isCache ? 'force-cache' : 'no-cache',
    });
    const data = await resp.text();

    return { ...JSON.parse(data), code: resp.status };
  } catch (error) {
    return {
      ok: false,
      errors: [`${(error as Error).message} couldn't connect with server`],
      code: 500,
    };
  }
};
