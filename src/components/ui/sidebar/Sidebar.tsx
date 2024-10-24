'use client';
import { useSideMenuStore, useThemeColor } from '@/store/ui';
import clsx from 'clsx';
import { ThemeToggle } from '@/components/ui';

export const Sidebar = () => {
  const isSideMenuOpen = useSideMenuStore((s) => s.isSideMenuOpen);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  const isDarkMode = useThemeColor((s) => s.isDarkMode);

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
          'fixed right-0 top-0 w-[250px] sm:w-[400px] h-screen bg-backgroundLight z-20 shadow-2xl transform transition-all duration-300',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        <div className='w-full p-5 flex justify-end items-center sm:h-15 h-20 bg-accent dark:bg-dark-accent'>
          <p className={`pr-5 font-bold underline text-textDark`}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </p>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
