interface Props {
  children: React.ReactNode;
}

export default function nestedLayout({ children }: Props) {
  return <>{children}</>;
}
