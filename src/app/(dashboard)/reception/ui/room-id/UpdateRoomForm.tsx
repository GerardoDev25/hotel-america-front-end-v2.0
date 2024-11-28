'use client';

import { CheckBox, InputNumber, SelectInput } from '@/components/form';
import { IRoom, RoomState, RoomType } from '@/interfaces';

interface Props {
  room: IRoom;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

const roomTypes: { value: RoomType; label: RoomType }[] = [
  { label: 'normal', value: 'normal' },
  { label: 'suit', value: 'suit' },
];

const roomStates: { value: RoomState; label: string }[] = [
  { label: 'free', value: 'free' },
  { label: 'occupied', value: 'occupied' },
  { label: 'under maintenance', value: 'under_maintenance' },
  { label: 'pending cleaning', value: 'pending_cleaning' },
];

export const UpdateRoomForm = ({ room, setIsUpdating }: Props) => {
  const onCancelUpdate = () => {
    setIsUpdating(false);
  };

  return (
    <div className='w-full min-h-[90vh] sm:min-h-[60vh]'>
      <form className='mx-auto w-full max-w-[65rem] h-full pt-4 sm:pt-12'>
        <h2 className='text-2xl font-bold text-center'>Update Room</h2>
        <div className='w-full flex flex-col sm:flex-row pt-4'>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              className='mt-6 sm:mt-4'
              label={'Room Type'}
              optionAttributes={{ className: 'capitalize' }}
              options={roomTypes}
              defaultOption={{ label: room.roomType, value: room.roomType }}
            />
            <InputNumber
              className='mt-6 sm:mt-4'
              label={'bets number'}
              inputAttributes={{ value: room.betsNumber, placeholder: '1' }}
            />

            <InputNumber
              className='mt-6 sm:mt-4'
              label={'room number'}
              inputAttributes={{ value: room.roomNumber, placeholder: '100' }}
            />
          </div>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              className='mt-6 sm:mt-4'
              label={'Room State'}
              optionAttributes={{ className: 'capitalize' }}
              options={roomStates}
              defaultOption={{
                label: room.state.split('_').join(' '),
                value: room.state,
              }}
            />
            <CheckBox
              label={'Is Available'}
              inputAttributes={{ checked: room.isAvailable }}
              className='mt-6 sm:mt-10'
            />
            <div className='flex justify-between w-full mt-6 sm:mt-11'>
              <button className='w-[47%] btn-secondary'>Update</button>
              <button className='w-[47%] btn-danger' onClick={onCancelUpdate}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
