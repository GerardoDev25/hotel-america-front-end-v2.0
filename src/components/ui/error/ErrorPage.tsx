'use client';

import { useUserStore } from '@/store';
import { getStaffRootUrl } from '@/utils';

import Link from 'next/link';

interface Props {
  code?: number;
  titleMessage?: string;
  legend?: string;
}

export const ErrorPage = (props: Props) => {
  const {
    code = 404,
    titleMessage = 'Oops! Page Not Found',
    legend = 'The page you are looking for does not exist. It might have been moved or deleted.',
  } = props;

  const user = useUserStore((s) => s.user);
  const url = getStaffRootUrl(user.role);

  return (
    <div className='flex items-center justify-center min-h-screen bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-primary dark:text-dark-primary mb-4'>
          {code}
        </h1>
        <h2 className='text-3xl font-semibold text-complementary dark:text-dark-complementary mb-2'>
          {titleMessage}
        </h2>
        <p className='mb-8 text-lg'>{legend}</p>
        <Link
          href={url}
          className='inline-block px-6 py-3 bg-accent dark:bg-dark-accent text-white font-semibold rounded-lg transition hover:bg-primary dark:hover:bg-dark-primary'
        >
          Go Back Dashboard
        </Link>
      </div>
    </div>
  );
};
