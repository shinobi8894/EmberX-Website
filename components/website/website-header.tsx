"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

export function WebsiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  
  // Determine text colors based on page background
  const isLightTextPage = pathname === '/about' || pathname === '/legal';
  const textColor = isLightTextPage ? 'text-white' : 'text-zinc-900 dark:text-white';
  const navTextColor = isLightTextPage ? 'text-white/70 hover:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white';
  const mobileIconColor = isLightTextPage ? 'text-white/70 hover:text-white' : 'text-zinc-900 dark:text-white';

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`text-2xl font-bold ${textColor}`}>EmberX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/"
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#FF6900]' 
                  : navTextColor
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-[#FF6900]' 
                  : navTextColor
              }`}
            >
              About
            </Link>
            <Link 
              href="/legal"
              className={`font-medium transition-colors ${
                isActive('/legal') 
                  ? 'text-[#FF6900]' 
                  : navTextColor
              }`}
            >
              Legal
            </Link>
            <Link 
              href="/coming-soon"
              className={`font-medium transition-colors ${
                isActive('/coming-soon') 
                  ? 'text-[#FF6900]' 
                  : navTextColor
              }`}
            >
              Download
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin">
              <Button 
                variant="ghost" 
                className={`${navTextColor} font-medium`}
              >
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                className="bg-gradient-to-r from-[#FF6900] to-[#FF8533] hover:from-[#E55A00] hover:to-[#E57529] text-white rounded-full px-6 shadow-lg font-medium"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${mobileIconColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-black/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left font-medium py-2 transition-colors ${
                  isActive('/') 
                    ? 'text-[#FF6900]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left font-medium py-2 transition-colors ${
                  isActive('/about') 
                    ? 'text-[#FF6900]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                About
              </Link>
              <Link 
                href="/legal"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left font-medium py-2 transition-colors ${
                  isActive('/legal') 
                    ? 'text-[#FF6900]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Legal
              </Link>
              <Link 
                href="/coming-soon"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left font-medium py-2 transition-colors flex items-center gap-2 ${
                  isActive('/coming-soon') 
                    ? 'text-[#FF6900]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-white/20 text-white hover:bg-white/10"
                  >
                    Sign in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] hover:from-[#E55A00] hover:to-[#E57529] text-white"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
