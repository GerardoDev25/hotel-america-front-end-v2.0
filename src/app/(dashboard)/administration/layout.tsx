type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminPageLayout({ children }: Props) {
  return <div>{children}</div>;
}
