'use client';

import React from 'react';

import { useUserStore } from '@/store/user';
import { SidebarLinkList, LinkProperties, staffLinks } from '.';

export const SidebarMenu = () => {
  const user = useUserStore((s) => s.user);
  const links: LinkProperties[] = staffLinks[user.role];

  return (
    <div className='overflow-y-auto h-[70vh] pb-52 sm:pb-10  custom-scrollbar-style'>
      <SidebarLinkList links={links} />
    </div>
  );
};
