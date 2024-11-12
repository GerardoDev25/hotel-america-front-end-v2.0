import { Room } from '@/actions';
import { RoomGrid } from './';

export const MainView = async () => {
  const registers = await Room.getAll({ page: 2, limit: 12 });

  return (
    <div>
      <RoomGrid rooms={registers.rooms!} />
    </div>
  );
};
