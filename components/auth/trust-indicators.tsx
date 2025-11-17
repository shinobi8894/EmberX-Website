"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface TrustIndicator {
  value: string;
  label: string;
}

interface TrustIndicatorsProps {
  stats: TrustIndicator[];
}

export function TrustIndicators({ stats }: TrustIndicatorsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-center gap-6 md:gap-8 pt-4"
    >
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800"></div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
