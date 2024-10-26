import { UserRole } from '@/interfaces';
import {
  IoPersonOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
  IoReceiptOutline,
  IoPeopleCircleOutline,
  IoBedOutline,
  IoWalletOutline,
} from 'react-icons/io5';

export interface LinkProperties {
  url: string;
  icon: React.ReactNode;
  text: string;
}

export const staffLinks: Record<UserRole, LinkProperties[]> = {
  admin: [
    {
      url: '/administration/profile',
      icon: <IoPersonOutline size={30} />,
      text: 'User Info',
    },
    {
      url: '/administration/staff',
      icon: <IoPeopleOutline size={30} />,
      text: 'Staff',
    },
    {
      url: '/administration/business',
      icon: <IoStatsChartOutline size={30} />,
      text: 'Business statistics',
    },
  ],
  laundry: [
    {
      url: '/laundry/profile',
      icon: <IoPersonOutline size={30} />,
      text: 'User Info',
    },
    {
      url: '/laundry/charges',
      icon: <IoReceiptOutline size={30} />,
      text: 'Charges',
    },
  ],
  reception: [
    {
      url: '/reception/profile',
      icon: <IoPersonOutline size={30} />,
      text: 'User Info',
    },
    {
      url: '/reception/guests',
      icon: <IoPeopleCircleOutline size={30} />,
      text: 'Guest',
    },
    {
      url: '/reception/rooms',
      icon: <IoBedOutline size={30} />,
      text: 'Rooms',
    },
    {
      url: '/reception/payments',
      icon: <IoWalletOutline size={30} />,
      text: 'Payments',
    },
    {
      url: '/reception/charges',
      icon: <IoReceiptOutline size={30} />,
      text: 'Charges',
    },
  ],
  cafe: [
    {
      url: '/cafeteria/profile',
      icon: <IoPersonOutline size={30} />,
      text: 'User Info',
    },
  ],
};
