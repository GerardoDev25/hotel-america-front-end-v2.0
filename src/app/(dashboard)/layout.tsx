'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { verifyTokenExpired } from '@/actions/auth';
import { VerifyingCredentials } from '@/components/ui';

interface Props {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
  const [isTokenValidating, setIsTokenValidating] = useState(true);
  const isAuth = useAuthStore((s) => s.isAuth);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace('/auth/login');
    }
  }, [isAuth, router]);

  useEffect(() => {
    const handleTokenExpired = async () => {
      const { isTokenExpired } = await verifyTokenExpired();
      setIsAuth(!isTokenExpired);
      setIsTokenValidating(false);
    };

    handleTokenExpired();
  }, [setIsAuth]);

  if (isTokenValidating) {
    return <VerifyingCredentials />;
  }
  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-0 sm:mx-7 bg-backgroundLight'>
        {isAuth && children}
      </div>
    </main>
  );
}
