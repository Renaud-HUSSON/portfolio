import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Competence } from '../../../interfaces'
import { getFibonacciSpherePoints } from '../../../utils/fibonacciSpherePoints'
import { Point } from '../../common/Point/Point'
import * as THREE from 'three'
import { ResizeObserver } from '@juggle/resize-observer'

interface CompetencesProps {
  competences: Competence[]
}

export const Competences = ({ competences }: CompetencesProps) => {
  const groupRef = useRef<THREE.Group>(null)
  const points = getFibonacciSpherePoints(competences.length, 2.5)

  const Dolly = () => {
    useFrame((state) => {
      state.camera.lookAt(0, 0, 0)
      groupRef.current?.rotateX(0.002)
    })
    return null
  }

  return (
    <section className='a-propos__competences'>
      <h2>
        <span>Compétences</span>
      </h2>
      <div>
        <div className='a-propos__competences__sphere'>
          <Canvas dpr={2} resize={{ polyfill: ResizeObserver }}>
            <group ref={groupRef}>
              {competences.map((competence, i) => {
                return (
                  <Point key={i} competence={competence} position={points[i]} />
                )
              })}
              <Dolly />
            </group>
          </Canvas>
        </div>
        <div className='a-propos__competences__list'>
          <div>
            <h3>Liste de mes compétences:</h3>
            <ul>
              {competences.map((competence, i) => {
                return <li key={i}>{competence.technology.nom}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
