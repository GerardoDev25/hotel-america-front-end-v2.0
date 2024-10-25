import React from 'react';

import { UserRole } from '@/interfaces';
import { SidebarAdmin, SidebarCafe, SidebarLaundry, SidebarReception } from '.';

interface Props {
  role: UserRole;
}

export const SidebarMenu = ({ role }: Props) => {
  const staffMenu: Record<UserRole, React.ReactNode> = {
    admin: <SidebarAdmin />,
    cafe: <SidebarCafe />,
    laundry: <SidebarLaundry />,
    reception: <SidebarReception />,
  };

  return <div>{staffMenu[role]}</div>;
};
