import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">Page not found</p>
        <Link href="/">
          <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
