"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { AUTH_STATS, USER_SIGNIN_CONTENT, AUTH_ERRORS, AUTH_IMAGE_URL } from '@/constants';

export default function UserSignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(AUTH_ERRORS.emptyFields);
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      if (email === USER_SIGNIN_CONTENT.demo.email && password === USER_SIGNIN_CONTENT.demo.password) {
        window.location.href = '/';
      } else {
        setError(AUTH_ERRORS.invalidCredentials);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Image with Overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <div className="absolute inset-0">
          <img 
            src={AUTH_IMAGE_URL}
            alt={USER_SIGNIN_CONTENT.backgroundAlt}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">{USER_SIGNIN_CONTENT.brandName}</span>
            </Link>
          </motion.div>

          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
                {USER_SIGNIN_CONTENT.welcomeBadge}
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl xl:text-7xl font-bold leading-[0.9] mb-8 uppercase text-white"
            >
              {USER_SIGNIN_CONTENT.heroTitle.split('\n').map((line, i) => (
                <span key={i}>
                  {line === USER_SIGNIN_CONTENT.heroHighlight ? (
                    <span className="text-[#FF6900]">{line}</span>
                  ) : (
                    line
                  )}
                  {i < USER_SIGNIN_CONTENT.heroTitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-white/70 leading-relaxed max-w-lg"
            >
              {USER_SIGNIN_CONTENT.heroDescription}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-6"
          >
            {AUTH_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-3xl font-bold text-[#FF6900] mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden text-center mb-8"
          >
            <Link href="/" className="inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </Link>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{USER_SIGNIN_CONTENT.mobileTitle}</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{USER_SIGNIN_CONTENT.mobileSubtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block mb-8"
          >
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">{USER_SIGNIN_CONTENT.desktopTitle}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{USER_SIGNIN_CONTENT.desktopSubtitle}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-900 dark:text-white">{USER_SIGNIN_CONTENT.form.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={USER_SIGNIN_CONTENT.form.emailPlaceholder}
                className="h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-900 dark:text-white">{USER_SIGNIN_CONTENT.form.passwordLabel}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={USER_SIGNIN_CONTENT.form.passwordPlaceholder}
                  className="h-12 pr-10 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link 
                href="/forgot-password"
                className="text-sm text-[#FF6900] hover:text-[#E55A00] transition-colors"
              >
                {USER_SIGNIN_CONTENT.form.forgotPassword}
              </Link>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-[#FF6900] text-white hover:bg-[#E55A00] border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  {USER_SIGNIN_CONTENT.form.loadingButton}
                </>
              ) : (
                USER_SIGNIN_CONTENT.form.submitButton
              )}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 mt-8"
          >
            <div className="text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                {USER_SIGNIN_CONTENT.switch.message}{' '}
                <Link
                  href="/signup"
                  className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
                >
                  {USER_SIGNIN_CONTENT.switch.link}
                </Link>
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                {USER_SIGNIN_CONTENT.switch.brandMessage}{' '}
                <Link
                  href="/signin/brand"
                  className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
                >
                  {USER_SIGNIN_CONTENT.switch.brandLink}
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mt-8"
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-xs text-center mb-2">{USER_SIGNIN_CONTENT.demo.title}</p>
            <p className="text-zinc-900 dark:text-white text-sm text-center">
              Email: {USER_SIGNIN_CONTENT.demo.email}<br />
              Password: {USER_SIGNIN_CONTENT.demo.password}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
