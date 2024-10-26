import { IUser } from '@/interfaces';

export const SidebarReception = (user: Partial<IUser>) => {
  console.log(user);
  return <div>SidebarReception</div>;
};
