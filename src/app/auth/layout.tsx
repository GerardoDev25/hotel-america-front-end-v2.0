import { redirect } from 'next/navigation';
import { verifyTokenExpired } from '@/actions/auth';

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  const { isTokenExpired } = await verifyTokenExpired();

  if (!isTokenExpired) {
    redirect('/');
  }
  console.log({ isTokenExpired });
  return <div>{children}</div>;
}
