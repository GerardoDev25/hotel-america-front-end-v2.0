'use server';

// import { sleep } from '@/utils';
import { IRoom } from '@/interfaces';
import { customFetch } from '@/actions/fetch';

type ReturnValue = {
  code: number;
  ok: boolean;
  message?: string;
  errors?: string[];
};

type UpdateRoom = Omit<Partial<IRoom>, 'id'> & { id: string };

export const update = async (data: UpdateRoom) => {
  // await sleep(5);
  const url = `api/room`;

  const resp: ReturnValue = await customFetch({
    url,
    data,
    isAuth: true,
    method: 'PUT',
  });
  return resp;
};
