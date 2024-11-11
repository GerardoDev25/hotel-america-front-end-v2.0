'use server';

import { buildPaginationQueries } from '@/utils';
import { customFetch } from '@/actions/fetch';
import { Pagination, RegisterPagination } from '@/interfaces';

type ReturnValue = Partial<RegisterPagination> & {
  ok?: boolean;
  errors?: string[];
};

export const getAll = async (pagination?: Pagination) => {
  // await sleep(10);
  const queries = buildPaginationQueries(pagination!);

  let url = 'api/register';
  if (queries) url = `${url}?${queries}`;

  console.log({ url });

  const resp: ReturnValue = await customFetch({ url });
  return resp;
};
