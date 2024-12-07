'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    (<motion.button
      className={`p-2 rounded-full ${
        isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
      }`}
      onClick={() => setIsDarkMode(!isDarkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </motion.button>)
  );
}

