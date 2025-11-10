"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Demo credentials check
      if (email === 'demo@emberx.com' && password === 'demo123') {
        // Redirect to brand dashboard
        window.location.href = '/brand';
      } else {
        setError('Invalid email or password');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Image with Overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611416507098-e0842376fad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjByZXdhcmRzfGVufDF8fHx8MTc2MjY5MDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="EmberX Background"
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
            <span className="text-white text-xl font-bold">EmberX</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-xl">
            <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
              Welcome Back
            </div>
            
            <h1 className="text-6xl xl:text-7xl font-bold leading-[0.9] mb-8 uppercase text-white">
              start your
              <br />
              <span className="text-[#FF6900]">reward</span>
              <br />
              journey
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Sign in to discover amazing rewards nearby, collect brand tokens, 
              and be part of the future of location-based experiences.
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-[#FF6900] mb-1">1M+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6900] mb-1">50K+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6900] mb-1">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
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
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Welcome Back</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">Sign in to continue</p>
          </div>

          <div className="hidden lg:block mb-8">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Sign In</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Enter your credentials to access your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-900 dark:text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-900 dark:text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link 
                href="/forgot-password"
                className="text-sm text-[#FF6900] hover:text-[#E55A00] transition-colors"
              >
                Forgot password?
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
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Switch to Signup */}
          <div className="text-center mt-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="text-[#FF6900] hover:text-[#E55A00] font-medium transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 mt-8">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs text-center mb-2">Demo Credentials</p>
            <p className="text-zinc-900 dark:text-white text-sm text-center">
              Email: demo@emberx.com<br />
              Password: demo123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
