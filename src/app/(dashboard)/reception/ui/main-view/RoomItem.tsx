import clsx from 'clsx';
import Link from 'next/link';
import { IRoom } from '@/interfaces';
import { RoomStateTag } from '../../shared';

interface Props {
  room: IRoom;
}

export const RoomItem: React.FC<Props> = ({ room }) => {
  const url =
    room.state === 'occupied'
      ? `/reception/register/${room.id}?isRoomId=true`
      : `/reception/room/${room.id}`;

  return (
    <Link
      href={url}
      className={clsx(
        `flex justify-around items-center p-4 rounded-lg shadow-2xl bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text border-l-4 border-accent cursor-pointer hover:bg-backgroundLight-green hover:dark:bg-dark-bg-light color-transition`,
        {
          'border-complementary': !room.isAvailable,
        }
      )}
    >
      <h2 className='w-1/2 text-xl text-center font-bold text-primary dark:text-dark-primary mb-2 '>
        <span className=' text-6xl'>{room.roomNumber}</span>
        <p>({room.roomType})</p>
      </h2>
      <div className='w-1/2'>
        <p className='pb-4 text-md'>Beds: {room.betsNumber}</p>
        <p className='pb-4'>Status: {<RoomStateTag state={room.state} />}</p>
        <p
          className={clsx(`pb-4 font-bold text-accent`, {
            'text-complementary': !room.isAvailable,
          })}
        >
          {room.isAvailable ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </Link>
  );
};
