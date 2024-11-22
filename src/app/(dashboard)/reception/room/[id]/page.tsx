import { getRoomStatusBgColor } from '@/utils';
import { Room } from '@/actions';
import { DividerXColor, ErrorPageStandard } from '@/components/ui';
import { RoomIdBody, RoomIdHeader } from '../../ui/room-id';

interface Props {
  params: { id: string };
}

export default async function RegisterRoomPage({ params }: Props) {
  const { id } = params;
  const { room, ok, errors, code } = await Room.getById(id);

  if (!ok) {
    return <ErrorPageStandard code={code} legends={errors!} />;
  }

  return (
    <div>
      <RoomIdHeader state={room!.state} />
      <DividerXColor className={getRoomStatusBgColor(room!.state)} />
      <RoomIdBody room={room!} />
    </div>
  );
}
