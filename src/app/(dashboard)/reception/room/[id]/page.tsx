import { Room } from '@/actions';
import { ErrorPage } from '@/components/ui';

interface Props {
  params: { id: string };
}

export default async function RegisterRoomPage({ params }: Props) {
  const { id } = params;
  const { room, ok, errors } = await Room.getById(id);

  if (!ok) {
    const isNotFound = errors![0].includes(id);
    const titleMessage = isNotFound ? 'Room not found' : 'Something went wrong';
    const code = isNotFound ? 404 : 500;
    return (
      <ErrorPage code={code} titleMessage={titleMessage} legend={errors![0]} />
    );
  }

  return (
    <div>
      <h1>Room id</h1>
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </div>
  );
}
