'use client';

import React from 'react';

import { UserRole } from '@/interfaces';
import { SidebarAdmin, SidebarCafe, SidebarLaundry, SidebarReception } from '.';
import { useUserStore } from '@/store/user';

export const SidebarMenu = () => {
  const user = useUserStore((s) => s.user);

  const staffMenu: Record<UserRole, React.ReactNode> = {
    admin: <SidebarAdmin {...user} />,
    cafe: <SidebarCafe {...user} />,
    laundry: <SidebarLaundry {...user} />,
    reception: <SidebarReception {...user} />,
  };

  return <div>{staffMenu[user.role]}</div>;
};
