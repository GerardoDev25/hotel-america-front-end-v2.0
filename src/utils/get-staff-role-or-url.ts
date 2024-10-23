import { UserRole } from '@/interfaces';

export const getStaffRootUrl = (role: UserRole) => {
  const staffRole: Record<UserRole, string> = {
    admin: '/administration',
    cafe: '/cafeteria',
    laundry: '/laundry',
    reception: '/reception',
  };

  return staffRole[role];
};

export const getStaffRole = (role: UserRole) => {
  const staffRole: Record<UserRole, string> = {
    admin: 'Administration',
    cafe: 'Cafeteria',
    laundry: 'Laundry',
    reception: 'Reception',
  };

  return staffRole[role];
};
