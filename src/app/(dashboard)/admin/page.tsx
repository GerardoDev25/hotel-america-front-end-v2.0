'use client';
import { refreshToken } from '@/actions/auth';
import { useDelayedEffect } from '@/hooks';

export default function AdminPage() {
  useDelayedEffect(refreshToken);
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
