'use client';
import { useSideMenuStore } from '@/store/ui';
import clsx from 'clsx';

export const Sidebar = () => {
  const isSideMenuOpen = useSideMenuStore((s) => s.isSideMenuOpen);

  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);

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
          'fixed p-5 right-0 top-0 w-[250px] sm:w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      ></nav>
    </div>
  );
};
