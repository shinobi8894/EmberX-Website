"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { ONBOARDING_HEADER, ONBOARDING_STEPS, ONBOARDING_BUTTONS, ONBOARDING_NAVIGATION } from '@/constants';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Redirect to coming soon page after onboarding
      window.location.href = '/brand';
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    window.location.href = '/brand';
  };

  const step = ONBOARDING_STEPS[currentStep];
  const IconComponent = step.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6900] via-[#FF8533] to-[#FFA166] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <Link href="/" className="inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </Link>
          <h1 className="text-white text-2xl sm:text-3xl font-bold">{ONBOARDING_HEADER.logoText}</h1>
          <p className="text-white/90 text-base sm:text-lg mt-1">{ONBOARDING_HEADER.subtitle}</p>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center space-x-2 mb-6 sm:mb-8"
        >
          {ONBOARDING_STEPS.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-white w-8'
                  : index < currentStep
                  ? 'bg-white/70 w-2'
                  : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="bg-white border-white/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6900]/10 flex items-center justify-center mx-auto mb-6"
                >
                  <IconComponent size={28} className="text-[#FF6900]" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                >
                  {step.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                >
                  {step.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-3"
                >
                  {currentStep > 0 && (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="flex-1 border-[#FF6900]/30 text-[#FF6900] hover:bg-[#FF6900]/10"
                    >
                      {ONBOARDING_BUTTONS.back}
                    </Button>
                  )}
                  <Button
                    onClick={nextStep}
                    className="flex-1 bg-[#FF6900] text-white hover:bg-[#E55A00]"
                  >
                    {currentStep === ONBOARDING_STEPS.length - 1 ? ONBOARDING_BUTTONS.getStarted : ONBOARDING_BUTTONS.next}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Skip Option */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={skipOnboarding}
          className="w-full mt-4 sm:mt-6 text-white/80 hover:text-white text-sm transition-colors"
        >
          {ONBOARDING_BUTTONS.skip}
        </motion.button>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center space-x-4 mt-6"
        >
          <Link
            href="/signin"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            {ONBOARDING_NAVIGATION.alreadyHaveAccount}
          </Link>
          <span className="text-white/50">•</span>
          <Link
            href="/"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            {ONBOARDING_NAVIGATION.backToHome}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}