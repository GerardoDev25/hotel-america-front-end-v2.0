'use client';

import { InputText } from '@/components/form';
import { IRoom } from '@/interfaces';

interface Props {
  room: IRoom;
}

export const UpdateRoomForm = ({ room }: Props) => {
  return (
    <div className='w-full h-[90vh] sm:h-[60vh]'>
      <form className='mx-auto w-full max-w-[65rem] h-full border'>
        <h2 className='text-2xl font-bold text-center'>Update Room</h2>
        <pre>{JSON.stringify(room, null, 2)}</pre>
        <InputText
          inputAttributes={{
            onClick: () => {
              console.log('hola mundo');
            },
          }}
        />
      </form>
    </div>
  );
};
// @apply min-h-[calc(100vh-8rem)];
