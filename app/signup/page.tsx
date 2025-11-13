"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Eye, EyeOff, Loader2, Check } from 'lucide-react';
import { AUTH_STATS, SIGNUP_CONTENT, AUTH_ERRORS, AUTH_IMAGE_URL, PASSWORD_VALIDATION } from '@/constants';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const passwordRequirements = SIGNUP_CONTENT.passwordRequirements.map(req => ({
    met: PASSWORD_VALIDATION[req.id as keyof typeof PASSWORD_VALIDATION](password),
    text: req.text
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !mobile || !password || !confirmPassword) {
      setError(AUTH_ERRORS.emptyFields);
      return;
    }

    if (!username.startsWith('@')) {
      setError(AUTH_ERRORS.usernameFormat);
      return;
    }

    if (password !== confirmPassword) {
      setError(AUTH_ERRORS.passwordMismatch);
      return;
    }

    if (!passwordRequirements.every(req => req.met)) {
      setError(AUTH_ERRORS.passwordRequirements);
      return;
    }

    if (!agreeTerms) {
      setError(AUTH_ERRORS.agreeTerms);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to brand dashboard after successful signup
      window.location.href = '/brand';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Image with Overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={AUTH_IMAGE_URL}
            alt={SIGNUP_CONTENT.backgroundAlt}
            className="w-full h-full object-cover opacity-40"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold">{SIGNUP_CONTENT.brandName}</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-xl">
            <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
              {SIGNUP_CONTENT.badge}
            </div>
            
            <h1 className="text-6xl xl:text-7xl font-bold leading-[0.9] mb-8 uppercase text-white">
              {SIGNUP_CONTENT.hero.titleLine1}
              <br />
              <span className="text-[#FF6900]">{SIGNUP_CONTENT.hero.titleLine2}</span>
              <br />
              {SIGNUP_CONTENT.hero.titleLine3}
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              {SIGNUP_CONTENT.hero.description}
            </p>
          </div>

          {/* Bottom Features */}
          <div className="space-y-4">
            {SIGNUP_CONTENT.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FF6900] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
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
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{SIGNUP_CONTENT.mobileTitle}</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{SIGNUP_CONTENT.mobileSubtitle}</p>
          </div>

          <div className="hidden lg:block mb-8">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">{SIGNUP_CONTENT.desktopTitle}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{SIGNUP_CONTENT.desktopSubtitle}</p>
          </div>

          {/* Signup Form */}
          <ScrollArea className="h-full max-h-[calc(100vh-200px)]">
            <form onSubmit={handleSubmit} className="space-y-4 pr-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-zinc-900 dark:text-white">{SIGNUP_CONTENT.form.usernameLabel}</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (!value.startsWith('@') && value.length > 0) {
                      value = '@' + value;
                    }
                    setUsername(value);
                  }}
                  placeholder={SIGNUP_CONTENT.form.usernamePlaceholder}
                  className="h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-900 dark:text-white">{SIGNUP_CONTENT.form.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={SIGNUP_CONTENT.form.emailPlaceholder}
                  className="h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-zinc-900 dark:text-white">{SIGNUP_CONTENT.form.mobileLabel}</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder={SIGNUP_CONTENT.form.mobilePlaceholder}
                  className="h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-900 dark:text-white">{SIGNUP_CONTENT.form.passwordLabel}</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={SIGNUP_CONTENT.form.passwordPlaceholder}
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
                
                {/* Password Requirements */}
                {password && (
                  <div className="space-y-1 mt-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          req.met ? 'bg-[#FF6900]' : 'bg-zinc-200 dark:bg-zinc-800'
                        }`}>
                          {req.met && <Check size={10} className="text-white" />}
                        </div>
                        <span className={`text-xs ${req.met ? 'text-[#FF6900]' : 'text-zinc-500 dark:text-zinc-400'}`}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-zinc-900 dark:text-white">{SIGNUP_CONTENT.form.confirmPasswordLabel}</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={SIGNUP_CONTENT.form.confirmPasswordPlaceholder}
                    className="h-12 pr-10 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    className="data-[state=checked]:bg-[#FF6900] data-[state=checked]:border-[#FF6900] mt-1 flex-shrink-0"
                    disabled={isLoading}
                  />
                  <div className="flex-1 min-w-0">
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer block text-zinc-700 dark:text-zinc-300">
                      {SIGNUP_CONTENT.form.termsPrefix}{' '}
                      <Link href="/legal" className="text-[#FF6900] hover:text-[#E55A00] underline transition-colors inline-block">
                        {SIGNUP_CONTENT.form.termsLink}
                      </Link>{' '}
                      {SIGNUP_CONTENT.form.termsAnd}{' '}
                      <Link href="/legal" className="text-[#FF6900] hover:text-[#E55A00] underline transition-colors inline-block">
                        {SIGNUP_CONTENT.form.privacyLink}
                      </Link>
                    </Label>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketing"
                    checked={agreeMarketing}
                    onCheckedChange={(checked) => setAgreeMarketing(checked as boolean)}
                    className="data-[state=checked]:bg-[#FF6900] data-[state=checked]:border-[#FF6900] mt-1 flex-shrink-0"
                    disabled={isLoading}
                  />
                  <div className="flex-1 min-w-0">
                    <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer block text-zinc-700 dark:text-zinc-300">
                      {SIGNUP_CONTENT.form.marketingText}
                    </Label>
                  </div>
                </div>
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
                    {SIGNUP_CONTENT.form.loadingButton}
                  </>
                ) : (
                  SIGNUP_CONTENT.form.submitButton
                )}
              </Button>
            </form>
          </ScrollArea>

          {/* Switch to Login */}
          <div className="text-center mt-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              {SIGNUP_CONTENT.switch.message}{' '}
              <Link
                href="/signin"
                className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
              >
                {SIGNUP_CONTENT.switch.link}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
