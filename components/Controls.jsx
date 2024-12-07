'use client'

import { motion } from 'framer-motion'
import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export default function Controls() {
  return (
    (<div className="flex justify-between items-center mt-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <SkipBack className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full bg-blue-500 text-white">
        <Play className="w-8 h-8" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <SkipForward className="w-6 h-6" />
      </motion.button>
      <motion.div className="relative w-24 h-24" whileHover={{ scale: 1.1 }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="opacity-20" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset="100"
            className="transform -rotate-90 origin-center" />
        </svg>
        <Volume2
          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>)
  );
}

