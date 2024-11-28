'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { getStaffRootUrl } from '@/utils';
import { useDelayedEffect } from '@/hooks';
import { JWT, Session } from '@/actions/auth';
import { NotificationError, Sidebar, TopMenu } from '@/components/ui';
import { useAuthStore, useNotificationStore, useUserStore } from '@/store';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const HALF_AN_HOUR = 1_800_000;

export const DashboardClientLayout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const notificationId = useRef<number | string>(0);

  const route = useRouter();
  const pathName = usePathname();

  const isAuth = useAuthStore((s) => s.isAuth);
  const user = useUserStore((s) => s.user);

  const triggerToast = useNotificationStore((s) => s.triggerToast);
  const clearNotificationById = useNotificationStore(
    (s) => s.clearNotificationById
  );

  const refreshToken = useCallback(async () => {
    if (notificationId.current) clearNotificationById(notificationId.current);
    const { ok, errors } = await Session.refresh();

    if (!ok) {
      notificationId.current = triggerToast(
        <NotificationError errors={errors!} />,
        {
          autoClose: false,
          position: 'top-center',
          className: 'toastify-custom-notification',
        }
      );
      console.log(notificationId);
    }
  }, [triggerToast, clearNotificationById]);

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

  // ? refresh token if it expires in less than half an hour
  useDelayedEffect(async () => {
    const {
      ok,
      error = 'Authentication Failed',
      tokenDecoded,
    } = await JWT.decodeToken();
    if (!ok) {
      triggerToast(<NotificationError errors={[error]} />, {
        autoClose: false,
        position: 'top-center',
        className: 'toastify-custom-notification',
      });
    } else {
      const halfAnHourMore = Math.floor(Date.now() / 1000) + HALF_AN_HOUR;
      const timeTokenExpired = tokenDecoded!.exp - halfAnHourMore;

      if (timeTokenExpired > 0) {
        await refreshToken();
      }
    }
  });

  // ? refresh token every half an hour
  useEffect(() => {
    const intervalId = setInterval(refreshToken, HALF_AN_HOUR);
    return () => clearInterval(intervalId);
  }, [triggerToast, refreshToken]);

  return (
    <div className='mx-0 min-h-screen bg-backgroundLight dark:bg-dark-bg dark:text-dark-text color-transition relative'>
      {isAuth && (
        <>
          <TopMenu />
          <div className='p-2 relative z-0'>{children}</div>
          <Sidebar />
        </>
      )}
    </div>
  );
};
