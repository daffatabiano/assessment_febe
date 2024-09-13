import { Navbar } from '@/components';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
}
