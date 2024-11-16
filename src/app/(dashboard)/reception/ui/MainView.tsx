import { Room } from '@/actions';
import { RoomGrid } from './';
import { Pagination } from '@/components/ui';

const LIMIT = 12;
const PAGE = 1;

export const MainView = async () => {
  const { rooms = [], total } = await Room.getAll({ page: PAGE, limit: LIMIT });
  const totalPages = Math.ceil(total! / LIMIT);

  return (
    <div>
      <RoomGrid rooms={rooms!} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};
