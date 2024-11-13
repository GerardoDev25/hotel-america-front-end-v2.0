import { RoomItemSkeleton } from './RoomItemSkeleton';

const rooms = [
  { id: 'f9f9055d-036e-4944-9b84-6f4990143f9f' },
  { id: '3d4704ec-62d7-4250-a750-0df13061fe47' },
  { id: 'd21e2ecb-82df-49c5-a318-92c5df3224d0' },
  { id: '42e76b22-3ee5-44d8-85cb-55e034cc39b0' },
  { id: 'b8a9ba03-a036-4d94-bfbd-91b93c84ed1f' },
  { id: 'b31f3cd1-22a5-45e1-825b-9298a723e0d6' },
];

export const MainViewSkeleton = async () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3'>
        {rooms.map((room) => (
          <RoomItemSkeleton key={room.id} />
        ))}
      </div>
    </div>
  );
};
