"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, Building2, TrendingUp, Users, BarChart3, Shield } from 'lucide-react';
import { BRAND_SIGNIN_CONTENT, AUTH_ERRORS } from '@/constants';

export default function BrandSignInPage() {
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
      if (email === BRAND_SIGNIN_CONTENT.demo.email && password === BRAND_SIGNIN_CONTENT.demo.password) {
        window.location.href = '/brand';
      } else {
        setError(AUTH_ERRORS.invalidCredentials);
      }
    }, 1000);
  };

  const featureIcons = [TrendingUp, Users, BarChart3, Shield];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-white">{BRAND_SIGNIN_CONTENT.brandName}</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin/user">
              <Button variant="ghost" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                {BRAND_SIGNIN_CONTENT.navigation.userLogin}
              </Button>
            </Link>
            <Link href="mailto:sales@emberx.com">
              <Button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100">
                {BRAND_SIGNIN_CONTENT.navigation.contactSales}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features & Benefits */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FF6900] text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
                  <Building2 className="w-4 h-4" />
                  {BRAND_SIGNIN_CONTENT.welcomeBadge}
                </div>

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-zinc-900 dark:text-white">
                  {BRAND_SIGNIN_CONTENT.heroTitle}
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6900] to-[#FF8533] bg-clip-text text-transparent">
                    {BRAND_SIGNIN_CONTENT.heroHighlight}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {BRAND_SIGNIN_CONTENT.heroDescription}
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {BRAND_SIGNIN_CONTENT.features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#FF6900]/30"
                    >
                      <div className="w-12 h-12 bg-[#FF6900]/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#FF6900]" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
                {BRAND_SIGNIN_CONTENT.stats.map((stat, index) => (
                  <>
                    <div key={index}>
                      <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                    </div>
                    {index < BRAND_SIGNIN_CONTENT.stats.length - 1 && (
                      <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800"></div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full justify-center lg:justify-end flex lg:mx-0 order-1 lg:order-2">
              <div className='lg:max-w-md w-full'>
                <div className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                      {BRAND_SIGNIN_CONTENT.desktopTitle}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {BRAND_SIGNIN_CONTENT.desktopSubtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-900 dark:text-white font-medium">
                        {BRAND_SIGNIN_CONTENT.form.emailLabel}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={BRAND_SIGNIN_CONTENT.form.emailPlaceholder}
                        className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-[#FF6900] focus:ring-[#FF6900]"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-zinc-900 dark:text-white font-medium">
                        {BRAND_SIGNIN_CONTENT.form.passwordLabel}
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder={BRAND_SIGNIN_CONTENT.form.passwordPlaceholder}
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
                          {BRAND_SIGNIN_CONTENT.form.rememberMe}
                        </label>
                      </div>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
                      >
                        {BRAND_SIGNIN_CONTENT.form.forgotPassword}
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
                          {BRAND_SIGNIN_CONTENT.form.loadingButton}
                        </>
                      ) : (
                        BRAND_SIGNIN_CONTENT.form.submitButton
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs text-center mb-2">
                        {BRAND_SIGNIN_CONTENT.demo.title}
                      </p>
                      <p className="text-zinc-900 dark:text-white text-sm text-center">
                        Email: {BRAND_SIGNIN_CONTENT.demo.email}<br />
                        Password: {BRAND_SIGNIN_CONTENT.demo.password}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {BRAND_SIGNIN_CONTENT.switch.userMessage}{' '}
                    <Link
                      href="/signin/user"
                      className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
                    >
                      {BRAND_SIGNIN_CONTENT.switch.userLink}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
