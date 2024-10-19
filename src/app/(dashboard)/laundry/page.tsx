'use client';

import { refreshToken } from '@/actions/auth';
import { useDelayedEffect } from '@/hooks';

export default function LaundryPage() {
  useDelayedEffect(refreshToken);

  return (
    <div>
      <h1>laundry Page</h1>
    </div>
  );
}
