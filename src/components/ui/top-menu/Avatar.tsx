'use client';

import { useSideMenuStore } from '@/store/ui';
import { getInitials } from '@/utils';
import React from 'react';

interface Props {
  name: string;
}

export const Avatar = ({ name }: Props) => {
  const openSideMenu = useSideMenuStore((s) => s.openSideMenu);

  const initials = getInitials(name);
  return (
    <div
      className='text-textDark bg-complementary p-5 rounded-[50%] cursor-pointer hover:bg-primary hover:text-white transition-colors duration-150 ease-in-out'
      onClick={openSideMenu}
    >
      {initials}
    </div>
  );
};
