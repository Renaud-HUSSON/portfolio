import dateFormat from 'dateformat'
import Link from 'next/link'
import { ProjetPage } from '../../../interfaces'

interface PresentationProps {
  projet: ProjetPage
}

export const Presentation = ({ projet }: PresentationProps) => {
  return (
    <section className='projet__presentation'>
      <nav>
        <Link href='/'>
          <a className='projet__goback'>
            <svg
              width='42'
              height='24'
              viewBox='0 0 42 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.939337 10.9393C0.353552 11.5251 0.353552 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.807609 10.4853 1.3934L0.939337 10.9393ZM42 10.5L22 10.5L22 13.5L42 13.5L42 10.5ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z'
                fill='#0F0F10'
              />
            </svg>
          </a>
        </Link>
        <Link href='/a-propos'>
          <a>À PROPOS</a>
        </Link>
      </nav>
      <div className='projet__presentation__content'>
        <div className='projet__presentation__text'>
          <p className='projet__presentation__text__about'>
            <span>À PROPOS DU PROJET</span>
          </p>
          <h1>
            <span>{projet.nom}</span>
          </h1>
          <pre className='projet__presentation__text__description'>
            <p>{projet.long_description}</p>
          </pre>
          {projet.url && (
            <p
              className='projet__presentation__text__visit'
              data-testid='project-visit-site'
            >
              <span>
                <a href={projet.url} rel='noreferrer' target='_blank'>
                  Visiter le site{' '}
                  <svg
                    width='21'
                    height='12'
                    viewBox='0 0 21 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75L10 6.75V5.25L0 5.25L0 6.75ZM10 6.75L20 6.75V5.25L10 5.25V6.75Z'
                      fill='#58ADE2'
                    />
                  </svg>
                </a>
              </span>
            </p>
          )}
        </div>
        <div className='projet__presentation__informations'>
          <div className='projet__presentation__informations__technologies'>
            <p className='bigger'>
              <span>TECHNOLOGIES</span>
            </p>
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
            <p className='bigger'>
              <span>Début</span>
            </p>
            <p>
              <span>{dateFormat(projet.debut, 'mmmm yyyy')}</span>
            </p>
          </div>
          <div className='projet__presentation__informations__date'>
            <p className='bigger'>
              <span>Fin</span>
            </p>
            <p>
              <span>{dateFormat(projet.fin, 'mmmm yyyy')}</span>
            </p>
          </div>
          <div className='projet__presentation__informations__links'>
            <p className='bigger'>
              <span>Liens</span>
            </p>
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
              <p
                className='projet__presentation__url'
                data-testid='project-url'
              >
                <span>
                  <a href={projet.url} rel='noreferrer' target='_blank'>
                    site
                  </a>
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
