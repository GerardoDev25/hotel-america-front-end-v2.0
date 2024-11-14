'use client';

import React from 'react';

import { getStaffRole } from '@/utils';
import { useUserStore } from '@/store';
import { TopMenuLogo, Avatar } from './';

export const TopMenu = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className='sticky top-0 w-full p-2 mb-2 flex justify-between items-center sm:h-15 h-20 bg-accent dark:bg-dark-accent rounded-b-3xl'>
      <TopMenuLogo role={user.role} />
      <div className='flex items-center capitalize'>
        <p
          className={`pr-2 hidden md:block underline underline-offset-3 dark:text-dark-bg`}
        >
          {getStaffRole(user.role)}
        </p>
        <Avatar name={user.name} />
      </div>
    </div>
  );
};
