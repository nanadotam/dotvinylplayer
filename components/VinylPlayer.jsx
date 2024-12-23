'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function Vinyl({ coverImage }) {
  const vinylRef = useRef()
  const texture = useLoader(THREE.TextureLoader, coverImage)
  
  useFrame(() => {
    if (vinylRef.current) {
      vinylRef.current.rotation.z += 0.005
    }
  })

  return (
    <group ref={vinylRef}>
      {/* Vinyl record base */}
      <mesh position={[0, 0, -0.1]}>
        <cylinderGeometry args={[2, 2, 0.1, 64]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Album artwork */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.11, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
      {/* Center hole */}
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

export default function VinylPlayer({ coverImage }) {
  return (
    <motion.div 
      className="w-full aspect-square rounded-full overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Vinyl coverImage={coverImage} />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}

