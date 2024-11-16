'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { useAuthStore, useNotificationStore, useUserStore } from '@/store';
import { NotificationError, Sidebar, TopMenu } from '@/components/ui';
import { getStaffRootUrl } from '@/utils';
import { JWT, Session } from '@/actions/auth';
import { useDelayedEffect } from '@/hooks';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const HALF_AN_HOUR = 1800000;

export const DashboardClientLayout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const route = useRouter();
  const pathName = usePathname();

  const isAuth = useAuthStore((s) => s.isAuth);
  const user = useUserStore((s) => s.user);

  const triggerToast = useNotificationStore((s) => s.triggerToast);

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

  // ? refresh token
  const refreshToken = useCallback(async () => {
    const { ok, errors } = await Session.refresh();
    console.log({ ok });
    if (!ok) {
      triggerToast(<NotificationError errors={errors!} />, {
        autoClose: false,
        position: 'top-center',
        className:
          'dark:bg-dark-bg dark:text-dark-text dark:border dark:border-slate-400',
      });
    }
  }, [triggerToast]);

  // ? refresh token if it expires in less than half an hour
  useDelayedEffect(async () => {
    const { ok, error, tokenDecoded } = await JWT.decodeToken();
    if (!ok) {
      triggerToast(<NotificationError errors={[error!]} />, {
        autoClose: false,
        position: 'top-center',
        className:
          'dark:bg-dark-bg dark:text-dark-text dark:border dark:border-slate-400',
      });
    } else {
      const halfAnHourMore = Math.floor(Date.now() / 1000) + HALF_AN_HOUR;
      const timeTokenExpired = tokenDecoded!.exp - halfAnHourMore;

      if (timeTokenExpired > 0) {
        refreshToken();
      }
    }
  });

  // ? refresh token every half an hour
  useEffect(() => {
    const intervalId = setInterval(refreshToken, HALF_AN_HOUR);
    return () => clearInterval(intervalId);
  }, [triggerToast, refreshToken]);

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
