'use client';

import { IRoom } from '@/interfaces';
import { MainViewSkeleton, RoomItem } from '.';
import { useEffect, useState } from 'react';
import { Room } from '@/actions';

interface Props {
  page: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const limit = 12;

const getRooms = async (page: number) => {
  const { rooms = [], ...rest } = await Room.getAll({ page, limit });

  return { rooms, ...rest };
};

export const RoomGrid = ({ page, setTotalPages }: Props) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    getRooms(page)
      .then(({ rooms, total }) => {
        setRooms(rooms);
        setTotalPages(Math.ceil(total! / limit));
      })
      .finally(() => setIsFetchingData(false));
  }, [page, setTotalPages]);

  if (isFetchingData) {
    return <MainViewSkeleton />;
  }
  return (
    <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3'>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};
