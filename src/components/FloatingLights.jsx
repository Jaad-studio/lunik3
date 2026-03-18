import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingLights() {
  const lights = useRef([])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (lights.current[0]) {
      lights.current[0].position.x = Math.sin(t * 0.3) * 5
      lights.current[0].position.y = Math.cos(t * 0.2) * 3 + 1
      lights.current[0].position.z = Math.sin(t * 0.15) * 3
    }
    if (lights.current[1]) {
      lights.current[1].position.x = Math.cos(t * 0.25) * 4 - 3
      lights.current[1].position.y = Math.sin(t * 0.3) * 2 - 1
      lights.current[1].position.z = Math.cos(t * 0.2) * 2
    }
    if (lights.current[2]) {
      lights.current[2].position.x = Math.sin(t * 0.2 + 2) * 6
      lights.current[2].position.y = Math.cos(t * 0.15 + 1) * 4
      lights.current[2].position.z = Math.sin(t * 0.25) * 2 - 2
    }
  })

  const lightData = [
    { color: '#d4af37', intensity: 2, distance: 12, orb: '#f0d060' },
    { color: '#f9c8d5', intensity: 1.5, distance: 10, orb: '#ffffff' },
    { color: '#c8a0ff', intensity: 1, distance: 8, orb: '#e8d0ff' },
  ]

  return (
    <>
      {lightData.map((l, i) => (
        <group key={i} ref={el => lights.current[i] = el}>
          <pointLight color={l.color} intensity={l.intensity} distance={l.distance} />
          <Sphere args={[0.06, 8, 8]}>
            <meshBasicMaterial color={l.orb} transparent opacity={0.9} />
          </Sphere>
        </group>
      ))}
    </>
  )
}
