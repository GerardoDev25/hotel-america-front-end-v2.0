'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { LoginForm } from './ui';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const route = useRouter();

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

  return (
    <main className='flex flex-col min-h-screen'>
      {!isAuth && <LoginForm />}
    </main>
  );
}
