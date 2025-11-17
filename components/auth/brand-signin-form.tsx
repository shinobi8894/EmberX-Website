"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, Building2 } from 'lucide-react';

interface BrandSignInFormProps {
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  rememberMeText: string;
  forgotPasswordText: string;
  submitButtonText: string;
  loadingButtonText: string;
  demoTitle: string;
  demoEmail: string;
  demoPassword: string;
  switchMessage: string;
  switchLink: string;
  switchHref: string;
  onSubmit: (email: string, password: string) => Promise<{ error?: string }>;
}

export function BrandSignInForm({
  title,
  subtitle,
  emailLabel,
  emailPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  rememberMeText,
  forgotPasswordText,
  submitButtonText,
  loadingButtonText,
  demoTitle,
  demoEmail,
  demoPassword,
  switchMessage,
  switchLink,
  switchHref,
  onSubmit,
}: BrandSignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await onSubmit(email, password);
    
    if (result.error) {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="w-full justify-center lg:justify-end flex lg:mx-0">
      <div className="lg:max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-900 dark:text-white font-medium">
                {emailLabel}
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-[#FF6900] focus:ring-[#FF6900]"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-900 dark:text-white font-medium">
                {passwordLabel}
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={passwordPlaceholder}
                  className="h-12 pr-10 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-[#FF6900] focus:ring-[#FF6900]"
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-[#FF6900] bg-zinc-100 border-zinc-300 rounded focus:ring-[#FF6900] dark:bg-zinc-800 dark:border-zinc-700"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {rememberMeText}
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
              >
                {forgotPasswordText}
              </Link>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#FF6900] to-[#FF8533] hover:from-[#E55A00] hover:to-[#E57529] text-white font-medium shadow-lg hover:shadow-xl transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  {loadingButtonText}
                </>
              ) : (
                submitButtonText
              )}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800"
          >
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
              <p className="text-zinc-500 dark:text-zinc-400 text-xs text-center mb-2">
                {demoTitle}
              </p>
              <p className="text-zinc-900 dark:text-white text-sm text-center">
                Email: {demoEmail}<br />
                Password: {demoPassword}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-6"
        >
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            {switchMessage}{' '}
            <Link
              href={switchHref}
              className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
            >
              {switchLink}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
