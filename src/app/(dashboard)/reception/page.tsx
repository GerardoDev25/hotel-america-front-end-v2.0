import { Suspense } from 'react';
import { MainView } from './ui';

export default async function ReceptionPage() {
  return (
    <div>
      <h1>Reception Page</h1>
      <Suspense fallback={<div>Loading</div>}>
        <MainView />
      </Suspense>
    </div>
  );
}
