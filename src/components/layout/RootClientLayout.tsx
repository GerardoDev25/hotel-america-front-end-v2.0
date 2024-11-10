'use client';

import { useEffect, useState } from 'react';
import { ToastifyProvider } from '@/components/providers';
import { VerifyingCredentials } from '@/components/ui';
import { JWT, refreshToken } from '@/actions/auth';
import { useAuthStore } from '@/store';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const RootClientLayout = ({ children }: Props) => {
  const [isTokenValidating, setIsTokenValidating] = useState(true);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  useEffect(() => {
    const handleTokenExpired = async () => {
      const { isTokenExpired, tokenDecoded } = await JWT.verifyTokenExpired();
      if (!isTokenExpired) {
        refreshToken(tokenDecoded!);
      }
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
