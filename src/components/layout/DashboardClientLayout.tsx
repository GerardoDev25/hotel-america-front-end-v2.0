'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
import { Sidebar, TopMenu } from '@/components/ui';
import { getStaffRootUrl } from '@/utils';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const DashboardClientLayout = ({ children }: Props) => {
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
    if (!isAuth && !isLoading) route.replace(`/auth/login`);

    // ? if is authenticated ensure go is page by role
    const url = getStaffRootUrl(user.role);
    if (isAuth && !isLoading && !pathName.startsWith(url)) {
      route.replace(url);
    }
  }, [pathName, isLoading, user, route, isAuth]);

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
