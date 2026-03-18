import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function PetalsParticles({ count = 5000 }) {
  const mesh = useRef()

  const [positions, velocities, rotations] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const rot = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      vel[i * 3]     = (Math.random() - 0.5) * 0.01
      vel[i * 3 + 1] = -Math.random() * 0.008 - 0.002
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
      rot[i]         = Math.random() * Math.PI * 2
    }
    return [pos, vel, rot]
  }, [count])

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3)
    const palette = [
      [0.98, 0.78, 0.84], // rose poudré
      [0.95, 0.60, 0.70], // rose foncé
      [0.83, 0.69, 0.22], // or
      [1.00, 0.90, 0.95], // blanc rosé
      [0.94, 0.85, 0.50], // or clair
    ]
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3]     = c[0]
      col[i * 3 + 1] = c[1]
      col[i * 3 + 2] = c[2]
    }
    return col
  }, [count])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) s[i] = Math.random() * 8 + 2
    return s
  }, [count])

  useFrame(() => {
    if (!mesh.current) return
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3]     += vel[i * 3] + Math.sin(Date.now() * 0.0005 + i) * 0.003
      pos[i * 3 + 1] += vel[i * 3 + 1]
      pos[i * 3 + 2] += vel[i * 3 + 2]
      // Reboucler en haut
      if (pos[i * 3 + 1] < -15) {
        pos[i * 3 + 1] = 15
        pos[i * 3] = (Math.random() - 0.5) * 30
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y += 0.0003
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
