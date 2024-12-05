import { DividerXColor } from '@/components/ui';
import { getRoomStatusBgColor } from '@/utils';
import { RoomIdHeader } from '../../ui/room-id';
import { CreateRoomForm } from '../../ui/room-new';

export default function NewRoomPage() {
  return (
    <>
      <RoomIdHeader state={'free'} roomId={'new'} />
      <DividerXColor className={getRoomStatusBgColor('free')} />
      <CreateRoomForm />
    </>
  );
}
