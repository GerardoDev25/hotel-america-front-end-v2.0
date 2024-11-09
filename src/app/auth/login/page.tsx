'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { getStaffRootUrl } from '@/utils';
import { useUserStore, useAuthStore } from '@/store';
import { LoginForm } from './ui';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const route = useRouter();
  const searchParams = useSearchParams();

  const user = useUserStore((s) => s.user);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    if (isAuth && !isLoading) {
      route.replace(getStaffRootUrl(user.role));
    }
  }, [isLoading, isAuth, route, user]);

  const errorMessage = decodeURIComponent(
    searchParams.get('errorMessage') ?? ''
  );

  return (
    <main className='flex flex-col min-h-screen'>
      {!isAuth && <LoginForm errorMessage={errorMessage} />}
    </main>
  );
}
