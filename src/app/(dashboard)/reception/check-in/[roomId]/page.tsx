import { Room } from '@/actions';
import { ErrorPageStandard } from '@/components/ui';

interface Props {
  params: { roomId: string };
}

export default async function CheckInPage({ params }: Props) {
  const { code, errors, ok, room } = await Room.getById(params.roomId);

  if (!ok) {
    return <ErrorPageStandard code={code} legends={errors!} />;
  }
  return (
    <div>
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </div>
  );
}
