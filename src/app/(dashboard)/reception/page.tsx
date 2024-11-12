import { Suspense } from 'react';
import { MainView } from './ui';
import { Title } from '@/components/ui';

export default async function ReceptionPage() {
  return (
    <div>
      <Title title={'Room List'} />
      <Suspense fallback={<div>Loading</div>}>
        <MainView />
      </Suspense>
    </div>
  );
}
