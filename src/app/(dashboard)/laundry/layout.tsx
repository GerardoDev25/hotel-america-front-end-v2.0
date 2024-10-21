import { PageClientLayout } from '@/components/layout';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminPageLayout({ children }: Props) {
  return <PageClientLayout>{children}</PageClientLayout>;
}
