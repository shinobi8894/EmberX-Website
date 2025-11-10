"use client";

import { useState, useEffect } from 'react';
import { MapPin, Gift, Zap, CheckCircle, Flame, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { INITIAL_COUNTDOWN, COMING_SOON_STATS, SOCIAL_LINKS, PAGE_CONTENT } from '../../constants';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const socialIcons = { Facebook, Twitter, Instagram, Linkedin, Github };

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_COUNTDOWN);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const statIcons = [Target, MapPin, Zap, Gift];

  return (
    <div className="min-h-screen bg-[#FFF7EF] dark:bg-gray-950 flex flex-col">
      {/* Header with Logo */}
      <header className="px-8 py-8 sm:px-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center shadow-lg">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Ember<span className="text-[#FF6900]">X</span>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 sm:px-8">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-4xl sm:text-5xl font-bold text-[#FF6900] mb-2">
                {timeLeft.days} days : {timeLeft.hours} hrs : {timeLeft.minutes} mins
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight max-w-4xl mx-auto">
              {PAGE_CONTENT.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {PAGE_CONTENT.description}
            </p>

            {/* Email Signup Form */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {PAGE_CONTENT.formTitle}
              </h3>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto shadow-lg">
                <Input
                  type="email"
                  placeholder={PAGE_CONTENT.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-16 text-base bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-700 rounded-xl sm:rounded-r-none focus:ring-[#FF6900] focus:border-[#FF6900]"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-16 px-8 bg-[#FF6900] hover:bg-[#E55A00] text-white font-bold rounded-xl sm:rounded-l-none"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {PAGE_CONTENT.subscribedButton}
                    </>
                  ) : (
                    PAGE_CONTENT.subscribeButton
                  )}
                </Button>
              </form>
              {isSubmitted && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-4 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {PAGE_CONTENT.successMessage}
                </p>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              {COMING_SOON_STATS.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <Card key={index} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-10 h-10 bg-[#FF6900] rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-[#FF6900] mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-4">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = socialIcons[social.name as keyof typeof socialIcons];
            return (
              <button 
                key={index}
                className="w-10 h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 dark:text-gray-600 text-sm">
          {PAGE_CONTENT.copyright}
        </p>
      </footer>
    </div>
  );
}
