import { IntersectionOptions, useInView } from 'react-intersection-observer'
import { ProjetHomepage } from '../../../interfaces'

interface ProjetProps {
  projet: ProjetHomepage
  index: number
}

export const Projet = ({ projet, index }: ProjetProps) => {
  const options: IntersectionOptions = {
    threshold: 0.6,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options)

  return (
    <div
      className={`home__projets__item ${
        index % 2 === 1 && 'home__projets__item--right'
      } ${inView && 'home__projets__item--visible'}`}
      key={index}
      ref={ref}
    >
      <div>
        <h3>
          <span>
            {index + 1}. {projet.nom}
          </span>
        </h3>
        <p>
          <span>{projet.short_description}</span>
        </p>
        <p>
          <span>{projet.keywords}</span>
        </p>
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
          <img src={projet.banner.url} alt={projet.banner.alternativeText} />
        </picture>
      ) : (
        <img src={projet.banner.url} alt={projet.banner.alternativeText} />
      )}
    </div>
  )
}
