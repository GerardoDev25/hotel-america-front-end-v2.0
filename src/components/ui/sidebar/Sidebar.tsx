'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { IoLogOutOutline } from 'react-icons/io5';

import { useSideMenuStore, useThemeColor } from '@/store/ui';
import { ThemeToggle } from '@/components/ui';
import { useUserStore } from '@/store/user';
import { logOut } from '@/actions/auth';
import { useAuthStore } from '@/store/auth';
import { SidebarMenu } from './menu';

export const Sidebar = () => {
  const isSideMenuOpen = useSideMenuStore((s) => s.isSideMenuOpen);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  const isDarkMode = useThemeColor((s) => s.isDarkMode);
  const resetUser = useUserStore((s) => s.resetUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  const route = useRouter();

  const handleLogOut = () => {
    closeSideMenu();
    resetUser();
    logOut();
    setIsAuth(false);
    route.refresh();
  };

  return (
    <div className=''>
      {/* // background black */}

      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'></div>
      )}

      {/* // blur */}

      {isSideMenuOpen && (
        <div
          onClick={closeSideMenu}
          className='face-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
        ></div>
      )}

      {/* SideMenu */}

      <nav
        className={clsx(
          'fixed right-0 top-0 w-[250px] sm:w-[400px] h-screen bg-backgroundLight z-20 shadow-2xl transform transition-transform duration-300 dark:bg-dark-bg',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        {/* Theme Toggle */}

        <div className='w-full px-5 flex justify-end items-center sm:h-15 h-20 bg-accent dark:bg-dark-accent mb-5'>
          <p className={`pr-5 font-bold underline text-textDark`}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </p>
          <ThemeToggle />
        </div>

        <div className='px-5'>
          {' '}
          <button
            className='flex w-full items-center mt-10 p-2 hover:bg-gray-300 rounded hover:text-textDark dark:hover:bg-dark-accent'
            onClick={handleLogOut}
          >
            <IoLogOutOutline size={30} />
            <span className='ml-3 text-xl'>Log Out</span>
          </button>
          {/* Divider */}
          <div className='w-full h-px bg-gray-200 my-10' />
          {/* Menu */}
          <SidebarMenu />
        </div>
      </nav>
    </div>
  );
};
