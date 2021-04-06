import { RefObject } from 'react'
import { ProjetHomepage } from '../../interfaces'

interface ProjetsProps {
  projets: ProjetHomepage[]
  projetsRef: RefObject<HTMLElement>
}

export const Projets = ({ projets, projetsRef }: ProjetsProps) => {
  return (
    <section className='home__projets' ref={projetsRef}>
      <h2>PROJETS</h2>
      {projets.map((projet, i) => {
        return (
          <div
            className={`home__projets__item ${
              i % 2 === 1 && 'home__projets__item__right'
            }`}
            key={i}
          >
            <div>
              <h3>
                {i + 1}. {projet.nom}
              </h3>
              <p>{projet.short_description}</p>
            </div>
            {projet.banner.formats !== null ? (
              <picture>
                {projet.banner.formats.thumbnail && (
                  <source
                    srcSet={projet.banner.formats.thumbnail.url}
                    media='(max-width: 414px)'
                  />
                )}
                {projet.banner.formats.small && (
                  <source
                    srcSet={projet.banner.formats.small.url}
                    media='(max-width: 768px)'
                  />
                )}
                {projet.banner.formats.medium && (
                  <source
                    srcSet={projet.banner.formats.medium.url}
                    media='(max-width: 1920px)'
                  />
                )}
                {projet.banner.formats.large && (
                  <source
                    srcSet={projet.banner.formats.large.url}
                    media='(min-width: 1921px)'
                  />
                )}
                <img
                  src={projet.banner.url}
                  alt={projet.banner.alternativeText}
                />
              </picture>
            ) : (
              <img
                src={projet.banner.url}
                alt={projet.banner.alternativeText}
              />
            )}
          </div>
        )
      })}
    </section>
  )
}
