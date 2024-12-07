'use client'

import { motion } from 'framer-motion'

export default function SongInfo({ song }) {
  return (
    (<div className="mt-6 text-center">
      <motion.div
        className="overflow-hidden whitespace-nowrap font-dot-matrix text-xl"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>
        {song.title} - {song.artist}
      </motion.div>
      <p className="text-sm mt-2">{song.album}</p>
    </div>)
  );
}

