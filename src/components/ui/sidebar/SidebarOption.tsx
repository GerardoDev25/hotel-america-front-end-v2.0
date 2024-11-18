'use client';

import Link from 'next/link';

import { LinkProperties } from '.';
import { useSideMenuStore } from '@/store';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const SidebarOption = ({ url, icon, text }: LinkProperties) => {
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);

  const path = usePathname();

  return (
    <Link
      href={url}
      onClick={closeSideMenu}
      className={clsx(
        'flex w-full items-center my-2 p-4 hover:bg-gray-300 rounded hover:text-textDark dark:hover:bg-dark-accent',
        {
          'bg-backgroundLight-dark  dark:bg-dark-bg-light': url === path,
        }
      )}
    >
      {icon}
      <span className='ml-5 text-xl'>{text}</span>
    </Link>
  );
};
