import { IRoom, RoomState } from '@/interfaces';
import clsx from 'clsx';

interface Props {
  room: IRoom;
}

interface StateTagProps {
  state: RoomState;
}

export const RoomItem: React.FC<Props> = ({ room }) => {
  return (
    <div
      className={clsx(
        `flex justify-around items-center p-4 rounded-lg shadow-2xl bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text border-l-4 border-accent cursor-pointer hover:bg-backgroundLight-green hover:dark:bg-dark-bg-light color-transition`,
        {
          'border-complementary': !room.isAvailable,
        }
      )}
    >
      <h2 className='w-2/3 text-xl font-bold text-primary dark:text-dark-primary mb-2 '>
        <span className='underline underline-offset-4'>
          Room {room.roomNumber}
        </span>
        <span className='pb-4 pl-2'>({room.roomType})</span>
      </h2>
      <div className='w-1/3'>
        <p className='pb-4'>Beds: {room.betsNumber}</p>
        <p className='pb-4'>Status: {<RoomStateTag state={room.state} />}</p>
        <p
          className={clsx(`pb-4 font-bold text-accent`, {
            'text-complementary': !room.isAvailable,
          })}
        >
          {room.isAvailable ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </div>
  );
};

export const RoomStateTag: React.FC<StateTagProps> = ({ state }) => {
  return (
    <span
      className={clsx('px-2 py-1 rounded-lg bg-primary', {
        'bg-red-400': state === 'under_maintenance',
        'bg-complementary':
          state === 'occupied' || state === 'pending_cleaning',
      })}
    >
      {state}
    </span>
  );
};
