import { Room } from '@/actions';

export const MainView = async () => {
  const registers = await Room.getAll({
    page: 2,
    limit: 7,
    isAvailable: false,
  });

  return (
    <div>
      <pre>{JSON.stringify(registers, null, 2)}</pre>
    </div>
  );
};
