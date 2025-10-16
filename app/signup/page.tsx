"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Eye, EyeOff, Loader2, Check, Zap } from 'lucide-react';

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

  const passwordRequirements = [
    { met: password.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(password), text: 'One uppercase letter' },
    { met: /[0-9]/.test(password), text: 'One number' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!username || !email || !mobile || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!username.startsWith('@')) {
      setError('Username must start with @');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!passwordRequirements.every(req => req.met)) {
      setError('Password does not meet requirements');
      setIsLoading(false);
      return;
    }

    if (!agreeTerms) {
      setError('Please agree to the Terms of Service');
      setIsLoading(false);
      return;
    }

    // Simulate signup process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to onboarding or signin
      window.location.href = '/onboarding';
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
          </Link>
          <h1 className="text-foreground text-2xl sm:text-3xl font-bold">Join EmberX</h1>
          <p className="text-muted-foreground mt-1">Start earning rewards today</p>
        </div>

        {/* Signup Form */}
        <Card className="bg-card/50 border-border shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Create Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-full max-h-[70vh]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground">Username</Label>
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
                    placeholder="@yourusername"
                    className="h-11 sm:h-12 bg-background border-input"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-11 sm:h-12 bg-background border-input"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="h-11 sm:h-12 bg-background border-input"
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
                      placeholder="Create a password"
                      className="h-11 sm:h-12 pr-10 bg-background border-input"
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
                  
                  {/* Password Requirements */}
                  {password && (
                    <div className="space-y-1 mt-2">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            req.met ? 'bg-primary' : 'bg-muted-foreground'
                          }`}>
                            {req.met && <Check size={10} className="text-primary-foreground" />}
                          </div>
                          <span className={`text-xs ${req.met ? 'text-primary' : 'text-muted-foreground'}`}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="h-11 sm:h-12 pr-10 bg-background border-input"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-1 flex-shrink-0"
                      disabled={isLoading}
                    />
                    <div className="flex-1 min-w-0">
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer block text-foreground">
                        I agree to the{' '}
                        <Link href="/legal" className="text-primary hover:text-primary/80 underline hover:no-underline transition-colors inline-block">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/legal" className="text-primary hover:text-primary/80 underline hover:no-underline transition-colors inline-block">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="marketing"
                      checked={agreeMarketing}
                      onCheckedChange={(checked) => setAgreeMarketing(checked as boolean)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-1 flex-shrink-0"
                      disabled={isLoading}
                    />
                    <div className="flex-1 min-w-0">
                      <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer block text-foreground">
                        I want to receive marketing emails about new features and deals
                      </Label>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 sm:h-12 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Switch to Login */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/signin"
              className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
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