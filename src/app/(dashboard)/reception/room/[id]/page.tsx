import { Room } from '@/actions';
import { DividerXColor, ErrorPageStandard, Title } from '@/components/ui';
import { getRoomStatusBgColor } from '@/utils';

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
      <Title title='Room Management' className='mb-1' />
      <DividerXColor className={getRoomStatusBgColor(room!.state)} />
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </div>
  );
}
