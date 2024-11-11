import { cleanObject } from './clean-object';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const buildPaginationQueries = (queries: Record<string, any>) => {
  const cleanedQueries = cleanObject(queries);

  const queryStrings = Object.entries(cleanedQueries).map(([key, value]) => {
    return `${key}=${value}`;
  });

  return queryStrings.join('&');
};
