'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { LoginForm } from './ui';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const route = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    if (isAuth && !isLoading) {
      const localStorageUser = localStorage.getItem('user-storage') || '{}';
      const { user } = JSON.parse(localStorageUser).state;
      route.replace(`/${user.role}`);
    }
  }, [isLoading, isAuth, route]);

  const errorMessage = decodeURIComponent(
    searchParams.get('errorMessage') ?? ''
  );

  return (
    <main className='flex flex-col min-h-screen'>
      {!isAuth && <LoginForm errorMessage={errorMessage} />}
    </main>
  );
}
