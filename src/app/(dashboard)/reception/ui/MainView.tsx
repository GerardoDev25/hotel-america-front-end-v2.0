import { getAll } from '@/actions/register';

export const MainView = async () => {
  const registers = await getAll({ page: 2, limit: 3 });

  return (
    <div>
      <pre>{JSON.stringify(registers, null, 2)}</pre>
    </div>
  );
};
