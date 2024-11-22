import clsx from 'clsx';
import { RoomState } from '@/interfaces';
import { getRoomStatusBgColor } from '@/utils';

interface StateTagProps {
  state: RoomState;
}

export const RoomStateTag: React.FC<StateTagProps> = ({ state }) => {
  const tag = state.replaceAll('_', ' ');
  const bgColor = getRoomStatusBgColor(state);
  return (
    <span
      className={clsx(
        `inline-block px-2 py-1 rounded-lg font-bold text-white ${bgColor}`,
        {
          'dark:text-dark-bg-light':
            state === 'occupied' || state === 'pending_cleaning',
        }
      )}
    >
      {tag}
    </span>
  );
};
