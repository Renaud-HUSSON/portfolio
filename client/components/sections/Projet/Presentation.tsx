import dateFormat from '../../../utils/dateformat'
import { ProjetPage } from '../../../interfaces'
import { Button } from '../../common/Button/Button'

interface PresentationProps {
  projet: ProjetPage
}

export const Presentation = ({ projet }: PresentationProps) => {
  return (
    <section className='projet__presentation'>
      <div className='projet__presentation__text'>
        <h1>
          <span>{projet.nom}</span>
        </h1>
        <pre className='projet__presentation__text__description'>
          <p>{projet.long_description}</p>
        </pre>
        {projet.url && (
          <Button
            text='Visiter le site'
            arrow={true}
            link={projet.url}
            className='projet__presentation__text__visit'
            data-testid='project-visit-site'
            rel='noreferrer'
            target='_blank'
          />
        )}
      </div>
      <div className='projet__presentation__informations'>
        <div className='projet__presentation__informations__technologies'>
          <h2>
            <span>Technologies</span>
          </h2>
          <ul>
            {projet.technologies.map((tech, i) => {
              return (
                <li
                  key={i}
                  data-testid='project-techonology'
                  className={`projet__presentation__informations__technologies--${i}`}
                >
                  <span>{tech.nom}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='projet__presentation__informations__date'>
          <h2>
            <span>Début</span>
          </h2>
          <p>
            <span>{dateFormat(projet.debut, 'mmmm yyyy')}</span>
          </p>
        </div>
        <div className='projet__presentation__informations__date'>
          <h2>
            <span>Fin</span>
          </h2>
          <p>
            <span>{dateFormat(projet.fin, 'mmmm yyyy')}</span>
          </p>
        </div>
        <div className='projet__presentation__informations__links'>
          {(projet.url || projet.github) && (
            <h2>
              <span>Liens</span>
            </h2>
          )}
          {projet.github && (
            <p
              className='projet__presentation__github'
              data-testid='project-github'
            >
              <span>
                <a href={projet.github} rel='noreferrer' target='_blank'>
                  github
                </a>
              </span>
            </p>
          )}
          {projet.url && (
            <p className='projet__presentation__url' data-testid='project-url'>
              <span>
                <a href={projet.url} rel='noreferrer' target='_blank'>
                  site
                </a>
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
