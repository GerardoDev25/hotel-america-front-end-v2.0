'use client';
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
// app/not-found.tsx

import Link from 'next/link';

export default function NotFoundRoot() {
  const isAuth = useAuthStore((s) => s.isAuth);
  const user = useUserStore((s) => s.user);

  const url = isAuth ? `/${user.role}` : '/auth/login';

  return (
    <div className='flex items-center justify-center min-h-screen bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-primary dark:text-dark-primary mb-4'>
          404
        </h1>
        <h2 className='text-3xl font-semibold text-complementary dark:text-dark-complementary mb-2'>
          Oops! Page Not Found
        </h2>
        <p className='mb-8 text-lg'>
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <Link
          href={url}
          className='inline-block px-6 py-3 bg-accent dark:bg-dark-accent text-white font-semibold rounded-lg transition hover:bg-primary dark:hover:bg-dark-primary'
        >
          {isAuth ? 'Go Back Dashboard' : 'Go Back Login'}
        </Link>
      </div>
    </div>
  );
}
