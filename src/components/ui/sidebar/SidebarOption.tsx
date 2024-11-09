'use client';

import Link from 'next/link';

import { LinkProperties } from '.';
import { useSideMenuStore } from '@/store';

export const SidebarOption = ({ url, icon, text }: LinkProperties) => {
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  return (
    <Link
      href={url}
      onClick={closeSideMenu}
      className='flex w-full items-center my-2 p-4 hover:bg-gray-300 rounded hover:text-textDark dark:hover:bg-dark-accent'
    >
      {icon}
      <span className='ml-5 text-xl'>{text}</span>
    </Link>
  );
};
