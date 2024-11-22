'use client';

import { useRouter } from 'next/navigation';
import { IoLogOutOutline } from 'react-icons/io5';

import { Session } from '@/actions/auth';
import { useSideMenuStore, useUserStore, useAuthStore } from '@/store';

export const LogOutButton = () => {
  const resetUser = useUserStore((s) => s.resetUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  const route = useRouter();

  const handleLogOut = () => {
    closeSideMenu();
    resetUser();
    Session.logOut();
    setIsAuth(false);
    route.replace('/auth/login');
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
