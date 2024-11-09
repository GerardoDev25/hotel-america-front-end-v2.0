'use client';

import React from 'react';

import { getInitials } from '@/utils';
import { useSideMenuStore } from '@/store';

interface Props {
  name: string;
}

export const Avatar = ({ name }: Props) => {
  const openSideMenu = useSideMenuStore((s) => s.openSideMenu);

  const initials = getInitials(name);
  return (
    <div
      className='text-textDark bg-complementary p-5 rounded-[50%] cursor-pointer hover:bg-primary hover:text-white color-transition'
      onClick={openSideMenu}
    >
      {initials}
    </div>
  );
};
