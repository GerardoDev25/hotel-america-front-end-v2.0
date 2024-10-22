'use client';

import React from 'react';
import { useUserStore } from '@/store/user';
import { UserRole } from '@/interfaces';
import { TopMenuLogo, Avatar } from './';

export const TopMenu = () => {
  const user = useUserStore((state) => state.user);

  const staffRole: Record<UserRole, string> = {
    admin: 'Administration',
    cafe: 'Cafeteria',
    laundry: 'Laundry',
    reception: 'Reception',
  };

  return (
    <div className='w-full p-2 mb-2 flex justify-between items-center sm:h-15 h-20 bg-accent dark:bg-dark-accent rounded-b-3xl'>
      <TopMenuLogo role={user.role} />
      <div className='flex items-center capitalize'>
        <p
          className={`pr-2 hidden md:block underline underline-offset-3 dark:text-dark-bg`}
        >
          {staffRole[user.role]}
        </p>
        <Avatar name={user.name} />
      </div>
    </div>
  );
};
