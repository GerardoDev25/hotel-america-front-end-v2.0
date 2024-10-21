'use client';

import { useEffect, useState } from 'react';
import { ToastifyProvider } from '@/components/providers';
import { VerifyingCredentials } from '@/components/ui';
import { verifyTokenExpired } from '@/actions/auth';
import { useAuthStore } from '@/store/auth';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const RootClientLayout = ({ children }: Props) => {
  const [isTokenValidating, setIsTokenValidating] = useState(true);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  useEffect(() => {
    const handleTokenExpired = async () => {
      const { isTokenExpired } = await verifyTokenExpired();
      setIsAuth(!isTokenExpired);
      setIsTokenValidating(false);
    };

    handleTokenExpired();
  }, [setIsAuth]);

  return (
    <>
      {isTokenValidating ? (
        <VerifyingCredentials />
      ) : (
        <ToastifyProvider>{children}</ToastifyProvider>
      )}
    </>
  );
};
