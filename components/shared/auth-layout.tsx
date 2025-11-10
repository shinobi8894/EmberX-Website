import Link from 'next/link';
import { ReactNode } from 'react';
import { AUTH_IMAGE_URL, AUTH_STATS } from '../../constants';

interface AuthLayoutProps {
  children: ReactNode;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
}

export function AuthLayout({
  children,
  badge,
  heroTitle,
  heroHighlight,
  heroDescription,
  mobileTitle,
  mobileSubtitle,
}: AuthLayoutProps) {
  const titleParts = heroTitle.split(heroHighlight);

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Image with Overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <div className="absolute inset-0">
          <img 
            src={AUTH_IMAGE_URL}
            alt="EmberX Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold">EmberX</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-xl">
            <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
              {badge}
            </div>
            
            <h1 className="text-6xl xl:text-7xl font-bold leading-[0.9] mb-8 uppercase text-white">
              {titleParts[0]}
              <span className="text-[#FF6900]">{heroHighlight}</span>
              {titleParts[1]}
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              {heroDescription}
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-6">
            {AUTH_STATS.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-[#FF6900] mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </Link>
            {mobileTitle && (
              <>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{mobileTitle}</h1>
                {mobileSubtitle && <p className="text-zinc-600 dark:text-zinc-400 mt-1">{mobileSubtitle}</p>}
              </>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
