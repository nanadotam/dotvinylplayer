'use client'

import { motion } from 'framer-motion'

const tracks = [
  { id: 1, title: "Track name", album: "Album name", duration: "04:33" },
  { id: 2, title: "Track name", album: "Album name", duration: "04:46" },
  { id: 3, title: "Track name", album: "Album name", duration: "04:14" },
  { id: 4, title: "Track name", album: "Album name", duration: "03:59" },
  { id: 5, title: "Track name", album: "Album name", duration: "03:23" },
]

export default function TrackList() {
  return (
    <div className="w-full space-y-4">
      <h2 className="dot-matrix-text text-xl">Tracks</h2>
      <div className="space-y-2">
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/album-artwork.jpg" 
                alt={track.album}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="dot-matrix-text text-sm">{track.title}</p>
                <p className="text-text-secondary text-xs">{track.album}</p>
              </div>
            </div>
            <span className="text-text-secondary text-sm font-dot-matrix">
              {track.duration}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 