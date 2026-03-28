import {Footer} from './Footer';
import {Navbar} from './Navbar';

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({children}: PageShellProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
