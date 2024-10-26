'use client';

import { useSideMenuStore } from '@/store/ui';
import Link from 'next/link';
import React from 'react';

interface Props {
  url: string;
  icon: React.ReactNode;
  text: string;
}

export const SidebarOption = ({ url, icon, text }: Props) => {
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
