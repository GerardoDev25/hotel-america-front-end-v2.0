'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { useAuthStore, useUserStore } from '@/store';
import { Sidebar, TopMenu } from '@/components/ui';
import { getStaffRootUrl, getTokenFromCookies } from '@/utils';
import { jwtDecode } from 'jwt-decode';
import { Session } from '@/actions/auth';
// import { CronService } from '@/services';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const DashboardClientLayout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);
  const isAuth = useAuthStore((s) => s.isAuth);
  const resetUser = useUserStore((s) => s.resetUser);
  const user = useUserStore((s) => s.user);
  const route = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    // ? if is not authenticated, redirect to login page
    if (!isAuth && !isLoading) route.replace(`/auth/login`);

    // ? if is authenticated ensure go is page by role
    const url = getStaffRootUrl(user.role);
    if (isAuth && !isLoading && !pathName.startsWith(url)) {
      route.replace(url);
    }
  }, [pathName, isLoading, user, route, isAuth]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const token = getTokenFromCookies('token') || '';
      const isTokenValid = jwtDecode(token);
      if (!isTokenValid) {
        resetUser();
        Session.logOut();
        setIsAuth(false);
        route.replace(
          `/auth/login?errorMessage=${encodeURIComponent(
            'Credentials invalid'
          )}`
        );
      }
      // }, 60000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [resetUser, setIsAuth, route]);

  return (
    <div className='mx-0 min-h-screen bg-backgroundLight dark:bg-dark-bg dark:text-dark-text color-transition'>
      {isAuth && (
        <>
          <TopMenu />
          <Sidebar />
          <div className='p-2'>{children}</div>
        </>
      )}
    </div>
  );
};
