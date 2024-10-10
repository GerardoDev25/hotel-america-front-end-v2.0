'use server';
// Next.js Server Components
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

  const myHeaders = new Headers();

  if (isAuth) {
    const token = cookies().get('token');
    myHeaders.append('Authorization', `Bearer ${token}`);
  }

  const requestOptions = {
    method,
    headers: myHeaders,
    body: data ? JSON.stringify(data) : null,
  };

  const resp = await fetch(`${envs.BACK_END_URL}${url}`, {
    ...requestOptions,
    cache: isCache ? 'force-cache' : 'no-cache',
  })
    .then((res) => res.json())
    .catch(console.log);

  console.log(resp);
};
