'use client';

import { useUserStore } from '@/store';
import { getStaffRootUrl } from '@/utils';

import Link from 'next/link';

interface Props {
  code: number;
  legends: string | string[];
}

const titleList: Record<number, string> = {
  400: 'Bad Request, please check your request',
  401: 'Unauthorized you most to be Authenticated',
  403: 'Forbidden operation not Allow',
  404: 'Oops! Page Not Found',
  409: 'Conflict while processing request',
  500: 'Something went wrong',
};

export const ErrorPageStandard = ({ code, legends }: Props) => {
  const user = useUserStore((s) => s.user);
  const url = getStaffRootUrl(user.role);

  return (
    <div className='flex items-center justify-center min-hight-custom bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text'>
      <div className='text-center'>
        <div className='flex flex-col sm:flex-row items-center sm:text-left'>
          <h1 className='text-6xl sm:text-8xl font-bold text-primary dark:text-dark-primary mb-4 mr-4'>
            {code}
          </h1>
          <h2 className='text-3xl font-semibold text-complementary dark:text-dark-complementary mb-2'>
            {titleList[code] ?? titleList[500]}
          </h2>
        </div>
        <Legends legends={legends} />

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

export const Legends = ({ legends }: { legends: Props['legends'] }) => {
  if (Array.isArray(legends)) {
    return (
      <ul className='mb-8 text-lg'>
        {legends.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className='mb-8 text-lg'>{legends}</p>;
};
