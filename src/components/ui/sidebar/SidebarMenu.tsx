'use client';

import { useUserStore } from '@/store/user';
import { LinkProperties, staffLinks, SidebarOption } from '.';

export const SidebarMenu = () => {
  const user = useUserStore((s) => s.user);
  const links: LinkProperties[] = staffLinks[user.role];

  return (
    <div className='overflow-y-auto h-[70vh] pb-52 sm:pb-10  custom-scrollbar-style'>
      {links.map((link) => (
        <SidebarOption key={link.url} {...link} />
      ))}
    </div>
  );
};
