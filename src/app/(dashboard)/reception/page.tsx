import { Suspense } from 'react';
import { MainView, MainViewSkeleton } from './ui';
import { Title } from '@/components/ui';

export default async function ReceptionPage() {
  return (
    <div>
      <Title title={'Room List'} />
      <Suspense fallback={<MainViewSkeleton />}>
        <MainView />
      </Suspense>
    </div>
  );
}
