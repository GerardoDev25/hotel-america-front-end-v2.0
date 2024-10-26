'use client';

import Link from 'next/link';
import { useSideMenuStore } from '@/store/ui';
import { LinkProperties } from '.';

export const SidebarOption = ({ url, icon, text }: LinkProperties) => {
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);
  return (
    <Link
      href={url}
      onClick={closeSideMenu}
      className='flex w-full items-center mt-10 p-2 hover:bg-gray-300 rounded hover:text-textDark dark:hover:bg-dark-accent'
    >
      {icon}
      <span className='ml-3 text-xl'>{text}</span>
    </Link>
  );
};
