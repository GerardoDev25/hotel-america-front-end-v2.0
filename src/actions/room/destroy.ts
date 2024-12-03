'use server';

// import { sleep } from '@/utils';
import { customFetch } from '@/actions/fetch';

type ReturnValue = {
  code: number;
  ok: boolean;
  message?: string;
  errors?: string[];
};

export const destroy = async (id: string) => {
  // await sleep(5);
  const url = `api/room/${id}`;

  const resp: ReturnValue = await customFetch({
    url,
    isAuth: true,
    method: 'DELETE',
  });
  return resp;
};
