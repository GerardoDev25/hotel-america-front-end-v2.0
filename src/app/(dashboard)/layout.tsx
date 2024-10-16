'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const user = useUserStore((s) => s.user);
  const route = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    // ? if is not authenticated, redirect to login page
    if (isLoading) {
      return;
    }
    if (!isAuth && !isLoading) {
      route.replace(`/auth/login`);
    }

    // ? if is authenticated ensure go is page by role
    if (isAuth && !isLoading && !pathName.startsWith(user.role)) {
      route.replace(`/${user.role}`);
    }
  }, [pathName, isLoading, user, route, isAuth]);

  return (
    <main className='min-h-screen bg-white fade-in'>
      <div className='mx-0 sm:mx-7 bg-backgroundLight'>
        {isAuth && children}
      </div>
    </main>
  );
}
