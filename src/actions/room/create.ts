'use server';

// import { sleep } from '@/utils';
import { IRoom } from '@/interfaces';
import { customFetch } from '@/actions/fetch';

type ReturnValue = {
  code: number;
  ok: boolean;
  room?: IRoom;
  errors?: string[];
};

type CreateRoom = Omit<IRoom, 'id'>;

export const create = async (data: CreateRoom) => {
  // await sleep(5);
  const url = `api/room`;

  const resp: ReturnValue = await customFetch({
    url,
    data,
    isAuth: true,
    method: 'POST',
  });
  return resp;
};
