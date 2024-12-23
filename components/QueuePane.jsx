'use client'

import { motion } from 'framer-motion'
import TrackList from './TrackList'

export default function QueuePane() {
  return (
    <motion.div 
      className="h-full bg-secondary-black p-4 sm:p-6 rounded-xl"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="dot-matrix-text text-lg sm:text-xl mb-4 sm:mb-6">QUEUE</h2>
      <TrackList compact />
    </motion.div>
  )
} 