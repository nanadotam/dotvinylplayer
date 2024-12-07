'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import VinylPlayer from './VinylPlayer'
import Controls from './Controls'
import SongInfo from './SongInfo'
import DarkModeToggle from './DarkModeToggle'
import DotMatrixDisplay from './DotMatrixDisplay'

export default function DotMatrixMusicPlayer() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSong, setCurrentSong] = useState({
    title: 'Sample Song',
    artist: 'Sample Artist',
    album: 'Sample Album',
    cover: '/album-artwork.jpg'
  })

  return (
    (<motion.div
      className={`w-full max-w-md p-8 rounded-3xl shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-dot-matrix">Dot Matrix Player</h1>
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <DotMatrixDisplay text={`${currentSong.title} - ${currentSong.artist}`} />
      <VinylPlayer coverImage={currentSong.cover} />
      <SongInfo song={currentSong} />
      <Controls />
    </motion.div>)
  );
}

