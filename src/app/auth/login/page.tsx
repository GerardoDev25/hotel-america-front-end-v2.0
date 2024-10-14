'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { logOut, verifyTokenExpired } from '@/actions/auth';
import { LoginForm } from './ui';
import { useUserStore } from '@/store/user/user-store';

export default function LoginPage() {
  const [isTokenValidating, setIsTokenValidating] = useState(true);
  const [isTokenInvalid, setIsTokenInvalid] = useState(false);

  const user = useUserStore((s) => s.user);
  const route = useRouter();

  useEffect(() => {
    const handleTokenExpired = async () => {
      const { isTokenExpired } = await verifyTokenExpired();

      setIsTokenInvalid(isTokenExpired);
      console.log({ role: user.role, user });
      if (isTokenExpired) logOut();
      else route.replace(`/${user.role}`);

      setIsTokenValidating(false);
    };

    handleTokenExpired();
  }, [route, user]);

  if (isTokenValidating) {
    // todo create an component to this
    return <>Verifying Credentials</>;
  }
  return (
    <main className='flex flex-col min-h-screen'>
      {isTokenInvalid && <LoginForm />}
    </main>
  );
}
