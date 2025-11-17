"use client"

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BrandFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function BrandFeatureCard({ icon: Icon, title, description, delay = 0 }: BrandFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 hover:border-[#FF6900]/30"
      style={{ willChange: 'auto' }}
    >
      <div className="w-12 h-12 bg-[#FF6900]/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#FF6900]" />
      </div>
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}
