'use server';

import { buildPaginationQueries, sleep } from '@/utils';
import { customFetch } from '@/actions/fetch';
import { Pagination, RoomPagination } from '@/interfaces';

type ReturnValue = Partial<RoomPagination> & {
  ok?: boolean;
  errors?: string[];
};

type PaginationQueries = Pagination & { isAvailable?: boolean };

export const getAll = async (pagination?: PaginationQueries) => {
  await sleep(3);
  const queries = buildPaginationQueries(pagination!);
  let url = 'api/room';
  if (queries) url = `${url}?${queries}`;

  const resp: ReturnValue = await customFetch({ url });
  return resp;
};
