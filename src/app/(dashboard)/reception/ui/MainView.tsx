'use client';

import { Room } from '@/actions';
import { MainViewSkeleton, RoomGrid } from './';
import { Pagination } from '@/components/ui';
import { useEffect, useState } from 'react';
import { IRoom } from '@/interfaces';

const LIMIT = 12;
const INITIAL_PAGE = 1;

const getRooms = async (page: number) => {
  const { rooms = [], ...rest } = await Room.getAll({ page, limit: LIMIT });
  return { rooms, ...rest };
};

export const MainView = () => {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [totalPages, setTotalPages] = useState(1);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    getRooms(page).then(({ rooms, total }) => {
      setRooms(rooms);
      setTotalPages(Math.ceil(total! / LIMIT));
    });
  }, [page]);

  if (rooms.length === 0) {
    return <MainViewSkeleton />;
  }

  return (
    <div>
      {/* <RoomGrid rooms={rooms!} /> */}
      <RoomGrid page={0} />
      <Pagination totalPages={totalPages} setPage={setPage} />
    </div>
  );
};
