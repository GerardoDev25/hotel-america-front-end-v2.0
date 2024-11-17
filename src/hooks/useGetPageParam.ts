'use client';

import { useSearchParams } from 'next/navigation';

const INITIAL_PAGE = 1;
export const useGetPageParam = (): number => {
  const searchParams = useSearchParams();
  const pageString = searchParams.get('page') ?? INITIAL_PAGE;
  return isNaN(+pageString) ? 1 : +pageString;
};
