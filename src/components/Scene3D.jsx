import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'
import PetalsParticles from './PetalsParticles'
import FloatingLights from './FloatingLights'
import StarField from './StarField'

export default function Scene3D() {
  return (
    <Canvas
      className="webgl-canvas"
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4af37" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#f9c8d5" />
        <StarField />
        <PetalsParticles />
        <FloatingLights />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
