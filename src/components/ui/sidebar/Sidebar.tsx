'use client';

import clsx from 'clsx';

import { SidebarMenu } from '.';
import { useSideMenuStore, useThemeColor } from '@/store';
import { DividerX, LogOutButton, ThemeToggle } from '@/components/ui';

export const Sidebar = () => {
  const isSideMenuOpen = useSideMenuStore((s) => s.isSideMenuOpen);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  const isDarkMode = useThemeColor((s) => s.isDarkMode);

  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/*  background black */}
          <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
          {/*  blur */}
          <div
            onClick={closeSideMenu}
            className='face-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
          />
        </>
      )}

      {/* Sidebar navbar */}

      <nav
        className={clsx(
          'fixed right-0 top-0 w-[250px] sm:w-[400px] h-screen  bg-backgroundLight z-20 shadow-2xl transform transition-transform duration-300 dark:bg-dark-bg',
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

        {/* sidebar menu */}
        <div className='px-5'>
          <LogOutButton />
          <DividerX />
          <SidebarMenu />
        </div>
      </nav>
    </div>
  );
};
