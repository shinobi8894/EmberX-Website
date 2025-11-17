import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AuthNavigationProps {
  brandName: string;
  userLoginText: string;
  contactSalesText: string;
  userLoginHref?: string;
  contactSalesHref?: string;
}

export function AuthNavigation({
  brandName,
  userLoginText,
  contactSalesText,
  userLoginHref = '/signin/user',
  contactSalesHref = 'mailto:sales@emberx.com',
}: AuthNavigationProps) {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-zinc-900 dark:text-white">{brandName}</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link href={userLoginHref}>
            <Button variant="ghost" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
              {userLoginText}
            </Button>
          </Link>
          <Link href={contactSalesHref}>
            <Button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100">
              {contactSalesText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
