import { Title } from '@/components/ui';
import { RoomState } from '@/interfaces';
import { IoAddOutline, IoCheckmarkSharp } from 'react-icons/io5';

export const RoomIdHeader = ({ state }: { state: RoomState }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
      <Title title='Room Management' className='mb-1' />
      {state !== 'free' ? (
        <button className='flex items-center btn-primary'>
          <IoCheckmarkSharp />
          <span className='pl-2'>Enable Room</span>
        </button>
      ) : (
        <button className='flex items-center btn-primary'>
          <IoAddOutline />
          <span className='pl-2'>Make Check-in</span>
        </button>
      )}
    </div>
  );
};
