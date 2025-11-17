"use client"

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

interface BrandHeroSectionProps {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
}

export function BrandHeroSection({ badge, title, highlightText, description }: BrandHeroSectionProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 bg-[#FF6900] text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
          <Building2 className="w-4 h-4" />
          {badge}
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-zinc-900 dark:text-white"
      >
        {title}
        <br />
        <span className="bg-gradient-to-r from-[#FF6900] to-[#FF8533] bg-clip-text text-transparent">
          {highlightText}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}
