"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Loader2, Zap } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo credentials check
      if (email === 'demo@emberx.com' && password === 'demo123') {
        // Redirect to coming soon or dashboard
        window.location.href = '/coming-soon';
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground grid-lines flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6900]/5 via-transparent to-[#FF6900]/5"></div>
      
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
          </Link>
          <h1 className="text-foreground text-2xl sm:text-3xl font-bold text-neon">Welcome Back</h1>
          <p className="text-muted-foreground mt-1">Sign in to continue earning rewards</p>
        </div>

        {/* Login Form */}
        <Card className="glass neon-glow">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Sign In to EmberX</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-11 sm:h-12 bg-input/40 border-input hover:border-border/60 focus-visible:border-primary focus-visible:ring-primary/40 focus-visible:ring-[4px]"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-11 sm:h-12 pr-10 bg-input/40 border-input hover:border-border/60 focus-visible:border-primary focus-visible:ring-primary/40 focus-visible:ring-[4px]"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-11 sm:h-12 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 neon-glow"
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

            {/* Forgot Password */}
            <Link 
              href="/forgot-password"
              className="block w-full mt-4 text-muted-foreground hover:text-foreground text-sm transition-colors text-center"
            >
              Forgot your password?
            </Link>
          </CardContent>
        </Card>

        {/* Switch to Signup */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}
        <Card className="bg-card/50 border-border/50 p-3 sm:p-4 mt-4 sm:mt-6">
          <p className="text-muted-foreground text-xs text-center mb-2">Demo Credentials</p>
          <p className="text-foreground text-sm text-center">
            Email: demo@emberx.com<br />
            Password: demo123
          </p>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}