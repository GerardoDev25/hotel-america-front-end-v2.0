'use client';

import {
  CheckBox,
  InputNumber,
  InputText,
  SelectInput,
} from '@/components/form';
import { IRoom, RoomState, RoomType } from '@/interfaces';

interface Props {
  room: IRoom;
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

export const UpdateRoomForm = ({ room }: Props) => {
  return (
    <div className='w-full h-[90vh] sm:h-[60vh]'>
      <form className='mx-auto w-full max-w-[65rem] h-full border'>
        <h2 className='text-2xl font-bold text-center'>Update Room</h2>
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 p-8'>
            <SelectInput
              label={'Room Type'}
              optionAttributes={{ className: 'capitalize' }}
              options={roomTypes}
              defaultOption={{ label: room.roomType, value: room.roomType }}
            />
            <SelectInput
              label={'Room State'}
              optionAttributes={{ className: 'capitalize' }}
              options={roomStates}
              defaultOption={{
                label: room.state.split('_').join(' '),
                value: room.state,
              }}
            />
            {/* <CheckBox
              label={'Is Available'}
              inputAttributes={{ checked: room.isAvailable }}
            /> */}

            <InputNumber
              label={'bets number'}
              inputAttributes={{ value: room.betsNumber }}
              className='w-full'
            />
          </div>
        </div>
      </form>
    </div>
  );
};
