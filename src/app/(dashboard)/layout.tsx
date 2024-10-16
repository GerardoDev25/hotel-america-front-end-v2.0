'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const route = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    if (!isAuth && !isLoading) {
      route.replace(`/auth/login`);
    }
  }, [isLoading, isAuth, route]);

  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-0 sm:mx-7 bg-backgroundLight'>
        {isAuth && children}
      </div>
    </main>
  );
}
