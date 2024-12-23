'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProgressBar({ duration = "03:18", currentTime = "00:30" }) {
  const [progress, setProgress] = useState(0)

  return (
    <div className="w-full space-y-2">
      <div className="relative w-full h-1 bg-text-secondary/20 rounded-full overflow-hidden">
        <motion.div 
          className="absolute h-full bg-accent-red"
          initial={{ width: "0%" }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className="flex justify-between text-xs text-text-secondary font-dot-matrix">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  )
} 