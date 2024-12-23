'use client'

import { motion } from 'framer-motion'

export default function LibraryPane() {
  const playlists = [
    { id: 1, name: "RatJam", trackCount: "33 Tracks" },
    { id: 2, name: "Artist name", trackCount: "123 Tracks" },
    { id: 3, name: "Album name", trackCount: "21 Tracks" },
  ]

  return (
    <motion.div 
      className="h-full bg-secondary-black p-4 sm:p-6 rounded-xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="dot-matrix-text text-lg sm:text-xl mb-4 sm:mb-6">PLAYLISTS</h2>
      <div className="space-y-3 sm:space-y-4">
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            className="group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-black rounded-lg" />
              <div>
                <p className="dot-matrix-text text-xs sm:text-sm">{playlist.name}</p>
                <p className="text-text-secondary text-[10px] sm:text-xs">{playlist.trackCount}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 