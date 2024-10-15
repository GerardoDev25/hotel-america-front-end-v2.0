'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { logOut, verifyTokenExpired } from '@/actions/auth';
import { LoginForm } from './ui';
import { useUserStore } from '@/store/user';
import { useAuthStore } from '@/store/auth';
import { VerifyingCredentials } from '@/components/ui';

export default function LoginPage() {
  const [isTokenValidating, setIsTokenValidating] = useState(true);
  const [isTokenInvalid, setIsTokenInvalid] = useState(false);

  const resetUser = useUserStore((s) => s.resetUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  const route = useRouter();

  useEffect(() => {
    const handleTokenExpired = async () => {
      const { isTokenExpired } = await verifyTokenExpired();

      setIsTokenInvalid(isTokenExpired);
      if (isTokenExpired) {
        setIsAuth(false);
        resetUser();
        logOut();
      } else {
        setIsAuth(true);
        const localStorageUser = localStorage.getItem('user-storage') || '{}';
        const { user } = JSON.parse(localStorageUser).state;
        route.replace(`/${user.role}`);
      }

      setIsTokenValidating(false);
    };

    handleTokenExpired();
  }, [resetUser, route, setIsAuth]);

  if (isTokenValidating) {
    return <VerifyingCredentials />;
  }
  return (
    <main className='flex flex-col min-h-screen'>
      {isTokenInvalid && <LoginForm />}
    </main>
  );
}
