"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Building2, ArrowRight, Check } from 'lucide-react';
import { SIGNIN_SELECTION, AUTH_IMAGE_URL } from '@/constants';

export default function SignInSelectionPage() {
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

        <div className="relative z-10 flex flex-col justify-center p-12 w-full">
          <Link href="/" className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold">{SIGNIN_SELECTION.brandName}</span>
          </Link>

          <div className="max-w-xl">
            <h1 className="text-6xl xl:text-7xl font-bold leading-[0.9] mb-8 uppercase text-white">
              welcome<br />
              <span className="text-[#FF6900]">back</span> to<br />
              emberx
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Choose your account type to continue and access your personalized dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Selection Cards */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-2xl">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-3">{SIGNIN_SELECTION.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">{SIGNIN_SELECTION.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* User Sign In Card */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-[#FF6900] transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-[#FF6900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6900] transition-colors">
                  <Users className="w-7 h-7 text-[#FF6900] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {SIGNIN_SELECTION.userCard.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {SIGNIN_SELECTION.userCard.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {SIGNIN_SELECTION.userCard.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={SIGNIN_SELECTION.userCard.href} className="block">
                  <Button className="w-full h-12 bg-[#FF6900] hover:bg-[#E55A00] text-white group-hover:shadow-lg transition-all">
                    {SIGNIN_SELECTION.userCard.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Brand Sign In Card */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-[#FF6900] transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-[#FF6900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6900] transition-colors">
                  <Building2 className="w-7 h-7 text-[#FF6900] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {SIGNIN_SELECTION.brandCard.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {SIGNIN_SELECTION.brandCard.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {SIGNIN_SELECTION.brandCard.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={SIGNIN_SELECTION.brandCard.href} className="block">
                  <Button className="w-full h-12 bg-[#FF6900] hover:bg-[#E55A00] text-white group-hover:shadow-lg transition-all">
                    {SIGNIN_SELECTION.brandCard.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="text-zinc-600 dark:text-zinc-400 hover:text-[#FF6900] dark:hover:text-[#FF6900] transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
