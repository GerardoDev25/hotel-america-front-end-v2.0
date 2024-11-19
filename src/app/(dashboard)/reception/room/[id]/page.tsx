interface Props {
  params: { id: string };
}

export default function NamePage({ params }: Props) {
  const { id } = params;
  console.log({ id });
  return (
    <div>
      <h1>Room id</h1>
    </div>
  );
}
