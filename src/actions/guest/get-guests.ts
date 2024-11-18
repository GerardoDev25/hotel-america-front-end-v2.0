'use server';

import { buildPaginationQueries } from '@/utils';
// import { sleep } from '@/utils';
import { customFetch } from '@/actions/fetch';
import { Pagination, GuestPagination } from '@/interfaces';

type ReturnValue = Partial<GuestPagination> & {
  ok?: boolean;
  errors?: string[];
};

export const getAll = async (pagination?: Pagination) => {
  // await sleep(5);
  const queries = buildPaginationQueries(pagination!);
  let url = 'api/guest';
  if (queries) url = `${url}?${queries}`;

  const resp: ReturnValue = await customFetch({ url });
  return resp;
};
