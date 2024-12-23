'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import VinylPlayer from './VinylPlayer'
import Controls from './Controls'
import DotMatrixDisplay from './DotMatrixDisplay'
import ProgressBar from './ProgressBar'

export default function DotMatrixMusicPlayer() {
  const [currentSong, setCurrentSong] = useState({
    title: 'Track name',
    artist: 'Artist name',
    album: 'Album name',
    cover: '/album-artwork.jpg'
  })

  return (
    <motion.div
      className="h-full bg-secondary-black p-4 sm:p-6 lg:p-8 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col h-full max-h-full">
        <h1 className="dot-matrix-text text-xl sm:text-2xl text-center mb-4 sm:mb-6 lg:mb-8">MUSIC</h1>
        
        <div className="flex-grow flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8 min-h-0">
          <div className="w-full max-w-[min(100%,50vh)] aspect-square">
            <VinylPlayer coverImage={currentSong.cover} />
          </div>
          <div className="w-full max-w-[80%]">
            <DotMatrixDisplay text={currentSong.title} />
          </div>
          <p className="dot-matrix-text text-accent-red text-sm sm:text-base">{currentSong.artist}</p>
          <p className="text-text-secondary text-xs sm:text-sm">{currentSong.album}</p>
        </div>
        
        <div className="mt-auto pt-4 sm:pt-6 space-y-4 sm:space-y-6">
          <ProgressBar />
          <Controls />
        </div>
      </div>
    </motion.div>
  )
}

