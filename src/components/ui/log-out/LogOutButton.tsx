'use client';

import { IoLogOutOutline } from 'react-icons/io5';

import { useRouter } from 'next/navigation';
import { useSideMenuStore } from '@/store/ui';
import { useUserStore } from '@/store/user';
import { logOut } from '@/actions/auth';
import { useAuthStore } from '@/store/auth';

export const LogOutButton = () => {
  const resetUser = useUserStore((s) => s.resetUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  const route = useRouter();

  const handleLogOut = () => {
    closeSideMenu();
    resetUser();
    logOut();
    setIsAuth(false);
    route.refresh();
  };

  return (
    <button
      className='flex w-full items-center my-2 p-4 hover:bg-gray-300 rounded hover:text-textDark dark:hover:bg-dark-accent'
      onClick={handleLogOut}
    >
      <IoLogOutOutline size={30} />
      <span className='ml-3 text-xl'>Log Out</span>
    </button>
  );
};
