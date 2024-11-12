'use server';

import { buildPaginationQueries } from '@/utils';
import { customFetch } from '@/actions/fetch';
import { Pagination, RegisterPagination } from '@/interfaces';

type ReturnValue = Partial<RegisterPagination> & {
  ok?: boolean;
  errors?: string[];
};

type PaginationQueries = Pagination & { isAvailable?: boolean };

export const getAll = async (pagination?: PaginationQueries) => {
  // await sleep(3);
  const queries = buildPaginationQueries(pagination!);
  let url = 'api/room';
  if (queries) url = `${url}?${queries}`;

  console.log({ url });

  const resp: ReturnValue = await customFetch({ url });
  return resp;
};
