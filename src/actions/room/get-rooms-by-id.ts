'use server';

import { sleep } from '@/utils';
import { customFetch } from '@/actions/fetch';
import { IRoom } from '@/interfaces';

type ReturnValue = {
  room?: IRoom;
  ok?: boolean;
  errors?: string[];
};

export const getById = async (id: string) => {
  await sleep(5);
  const url = `api/room/${id}`;

  const resp: ReturnValue = await customFetch({ url });
  return resp;
};
