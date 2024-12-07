'use client'

import { useRef, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

function Vinyl({ coverImage }) {
  const vinylRef = useRef()
  const texture = useLoader(THREE.TextureLoader, coverImage)

  useFrame(() => {
    if (vinylRef.current) {
      vinylRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={vinylRef}>
      <cylinderGeometry args={[2, 2, 0.1, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function VinylScene({ coverImage }) {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Vinyl coverImage={coverImage} />
    </Suspense>
  );
}

export default function VinylPlayer({ coverImage }) {
  return (
    <div className="w-full h-64 mb-6">
      <Canvas>
        <VinylScene coverImage={coverImage} />
      </Canvas>
    </div>
  );
}

