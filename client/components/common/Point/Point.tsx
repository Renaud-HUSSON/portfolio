import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Competence, Point as PointInterface } from '../../../interfaces'

interface BoxProps {
  competence: Competence
  position: PointInterface
}

export const Point = ({ competence, position }: BoxProps) => {
  const points = useRef<THREE.Points>(null!)

  const texture = new THREE.TextureLoader().load(
    competence.technology.image?.url!
  )

  useEffect(() => {
    points.current.position.fromArray(Object.values(position))
  }, [])

  return (
    <points ref={points}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={1}
          array={new Float32Array([0, 0, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        map={texture}
        transparent={true}
        alphaTest={0.01}
      />
    </points>
  )
}
