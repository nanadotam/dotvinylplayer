'use client'

import { motion } from 'framer-motion'
import { Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react'

export default function Controls() {
  return (
    <div className="flex justify-between items-center px-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text-secondary hover:text-text-primary"
      >
        <Shuffle className="w-5 h-5" />
      </motion.button>
      
      <div className="flex items-center space-x-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-text-primary"
        >
          <SkipBack className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-accent-red rounded-full p-3"
        >
          <Play className="w-8 h-8 text-text-primary" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-text-primary"
        >
          <SkipForward className="w-6 h-6" />
        </motion.button>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text-secondary hover:text-text-primary"
      >
        <Repeat className="w-5 h-5" />
      </motion.button>
    </div>
  )
}

