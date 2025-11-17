"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { HEADER } from '@/constants';

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
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`text-2xl font-bold ${textColor}`}>{HEADER.brandName}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-8"
          >
            {HEADER.navigation.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href) 
                    ? 'text-[#FF6900]' 
                    : navTextColor
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Desktop Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-3"
          >
            <Link href="/signin/user">
              <Button 
                variant="ghost" 
                className={`${isLightTextPage ? 'text-white hover:bg-white/10 hover:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'} font-medium`}
              >
                User Sign In
              </Button>
            </Link>
            <Link href="/signin/brand">
              <Button 
                variant="ghost" 
                className={`${isLightTextPage ? 'text-white hover:bg-white/10 hover:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'} font-medium`}
              >
                Brand Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                className="bg-gradient-to-r from-[#FF6900] to-[#FF8533] hover:from-[#E55A00] hover:to-[#E57529] text-white rounded-full px-6 shadow-lg font-medium"
              >
                {HEADER.buttons.getStarted}
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden p-2 ${mobileIconColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden py-6 border-t border-white/10 bg-black/95 backdrop-blur-xl rounded-b-2xl overflow-hidden"
            >
            <nav className="flex flex-col gap-4">
              {HEADER.navigation.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left font-medium py-2 transition-colors ${
                    isActive(link.href) 
                      ? 'text-[#FF6900]' 
                      : 'text-white/70 hover:text-white'
                  } ${link.label === 'Download' ? 'flex items-center gap-2' : ''}`}
                >
                  {link.label === 'Download' && <Download className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <Link href="/signin/user" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-white/20 text-white hover:bg-white/10"
                  >
                    User Sign In
                  </Button>
                </Link>
                <Link href="/signin/brand" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-white/20 text-white hover:bg-white/10"
                  >
                    Brand Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] hover:from-[#E55A00] hover:to-[#E57529] text-white"
                  >
                    {HEADER.buttons.getStarted}
                  </Button>
                </Link>
              </div>
            </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
