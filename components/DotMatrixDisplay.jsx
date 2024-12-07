'use client'

import { motion } from 'framer-motion'

const DotMatrixDisplay = ({ text }) => {
  const matrixSize = 7
  const charWidth = 5
  const charHeight = 7
  const spacing = 1

  const charPatterns = {
    'A': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1]
    ],
    // Add more characters as needed
  }

  const getCharPattern = (char) => {
    return charPatterns[char.toUpperCase()] || Array(charHeight).fill(Array(charWidth).fill(0))
  }

  return (
    <svg className="w-full h-20" viewBox={`0 0 ${text.length * (charWidth + spacing) * matrixSize} ${charHeight * matrixSize}`}>
      {text.split('').map((char, charIndex) => (
        <g key={charIndex} transform={`translate(${charIndex * (charWidth + spacing) * matrixSize}, 0)`}>
          {getCharPattern(char).map((row, rowIndex) => 
            row.map((dot, colIndex) => (
              <motion.circle
                key={`${charIndex}-${rowIndex}-${colIndex}`}
                cx={colIndex * matrixSize + matrixSize / 2}
                cy={rowIndex * matrixSize + matrixSize / 2}
                r={matrixSize / 3}
                fill={dot ? 'currentColor' : 'none'}
                initial={{ opacity: 0 }}
                animate={{ opacity: dot ? 1 : 0 }}
                transition={{ duration: 0.5, delay: charIndex * 0.1 + (rowIndex * 5 + colIndex) * 0.01 }}
              />
            ))
          )}
        </g>
      ))}
    </svg>
  )
}

export default DotMatrixDisplay
