'use client';

import { refreshToken } from '@/actions/auth';
import { useDelayedEffect } from '@/hooks';

export default function ReceptionPage() {
  useDelayedEffect(refreshToken);
  return (
    <div>
      <h1>cafe Page</h1>
    </div>
  );
}
