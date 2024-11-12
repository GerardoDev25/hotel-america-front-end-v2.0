import { IRoom } from '@/interfaces';
import { RoomItem } from '.';

interface Props {
  rooms: IRoom[];
}

export const RoomGrid = ({ rooms }: Props) => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3'>
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};
