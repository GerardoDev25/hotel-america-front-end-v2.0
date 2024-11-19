interface Props {
  searchParams: { isRoomId?: string };
  params: { id: string };
}

export default function NamePage({ searchParams, params }: Props) {
  const { id } = params;
  const isRoomId = searchParams.isRoomId === 'true' ? true : false;
  console.log({ id, isRoomId });
  return (
    <div>
      <h1>Register id</h1>
    </div>
  );
}
