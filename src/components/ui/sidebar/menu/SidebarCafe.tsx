import { FaUserTie } from 'react-icons/fa';

import { SidebarOption } from './SidebarOption';
import { IUser } from '@/interfaces';

export const SidebarCafe = (user: Partial<IUser>) => {
  console.log(user);
  return (
    <>
      <SidebarOption
        url={'/cafeteria/profile'}
        icon={<FaUserTie size={30} />}
        text={'Staff Info'}
      />
    </>
  );
};
