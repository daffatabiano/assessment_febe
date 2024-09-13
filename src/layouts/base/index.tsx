import { Navbar } from '@/components';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-rose-400 w-full">
      <Navbar />
      {children}
    </div>
  );
}
