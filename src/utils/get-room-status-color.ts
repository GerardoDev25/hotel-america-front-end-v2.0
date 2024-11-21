import { RoomState } from '@/interfaces';

export const getRoomStatusBgColor = (
  state: RoomState
): React.StyleHTMLAttributes<HTMLImageElement>['className'] => {
  if (state === 'free') return 'bg-primary';
  if (state === 'under_maintenance') return 'bg-red-500';
  return 'dark:bg-dark-complementary bg-complementary';
};
