'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import { ArrowButton } from './ArrowButton';
import { generatePaginationNumbers } from '@/utils';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) redirect(pathName);

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathName}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    params.set(`page`, pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className='flex text-center justify-center mt-10 mb-12'>
      <nav aria-label='Page navigation example'>
        <ul className='flex list-style-none'>
          <ArrowButton
            href={createPageUrl(currentPage - 1)}
            icon={<IoChevronBackOutline />}
          />

          {allPages.map((page, index) => (
            <li key={`${page} - ${index}`} className='page-item'>
              <Link
                className={clsx(
                  'flex justify-center items-center w-10 h-10 page-link py-1.5 px-3 border-0 rounded color-transition bg-backgroundLight-dark hover:bg-backgroundLight-green dark:bg-dark-bg dark:hover:bg-dark-bg-light',
                  {
                    'text-primary dark:text-accent font-bold':
                      page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <ArrowButton
            href={createPageUrl(currentPage + 1)}
            icon={<IoChevronForwardOutline />}
          />
        </ul>
      </nav>
    </div>
  );
};
