import { DashboardClientLayout } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Administration hotel system',
};

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <main className='min-h-screen bg-white fade-in'>
      <DashboardClientLayout>{children}</DashboardClientLayout>
    </main>
  );
}
