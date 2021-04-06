import { RefObject } from 'react'
import { ProjetHomepage } from '../../../interfaces'
import { Projet } from './Projet'

interface ProjetsProps {
  projets: ProjetHomepage[]
  projetsRef: RefObject<HTMLElement>
}

export const Projets = ({ projets, projetsRef }: ProjetsProps) => {
  return (
    <section className='home__projets' ref={projetsRef}>
      <h2>PROJETS</h2>
      {projets.map((projet, i) => {
        return <Projet projet={projet} key={i} index={i} />
      })}
    </section>
  )
}
