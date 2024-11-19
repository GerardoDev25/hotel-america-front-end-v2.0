import { Room } from '@/actions';
import { ErrorPageStandard } from '@/components/ui';

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
      <h1>Room id</h1>
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </div>
  );
}
