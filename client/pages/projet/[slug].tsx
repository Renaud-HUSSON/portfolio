import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_PROJECTS_PATHS, GET_PROJECT_DATA } from '../../graphql/queries'
import { ProjetPage as ProjetPageInterface } from '../../interfaces'
import dateFormat from '../../utils/dateformat'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useCallback, useEffect, useRef } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

interface ProjetProps {
  projet: ProjetPageInterface
}

const ProjetPage = ({ projet }: ProjetProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [IOVideoRef, videoInView] = useInView({
    threshold: 0.2,
  })

  const videoRefs = useCallback(
    (node: HTMLVideoElement) => {
      videoRef.current = node
      IOVideoRef(node)
    },
    [IOVideoRef]
  )

  useEffect(() => {
    if (videoInView) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [videoInView])

  return (
    <main>
      <section className='projet__presentation'>
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
        <div className='projet__presentation__content'>
          <div className='projet__presentation__text'>
            <h2>À PROPOS DU PROJET</h2>
            <h1>{projet.nom}</h1>
            <pre className='projet__presentation__text__description'>
              <p>{projet.long_description}</p>
            </pre>
            {projet.url && (
              <p className='projet__presentation__text__visit'>
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
              </p>
            )}
          </div>
          <div className='projet__presentation__informations'>
            <div className='projet__presentation__informations__technologies'>
              <p className='bigger'>TECHNOLOGIES</p>
              <ul>
                {projet.technologies.map((tech, i) => {
                  return <li key={i}>{tech.nom}</li>
                })}
              </ul>
            </div>
            <div className='projet__presentation__informations__date'>
              <p className='bigger'>Début</p>
              <p>{dateFormat(projet.debut, 'mmmm yyyy')}</p>
            </div>
            <div className='projet__presentation__informations__date'>
              <p className='bigger'>Fin</p>
              <p>{dateFormat(projet.fin, 'mmmm yyyy')}</p>
            </div>
            <div className='projet__presentation__informations__links'>
              <p className='bigger'>Liens</p>
              {projet.github && (
                <p className='projet__presentation__github'>
                  <a href={projet.github} rel='noreferrer' target='_blank'>
                    github
                  </a>
                </p>
              )}
              {projet.url && (
                <p className='projet__presentation__url'>
                  <a href={projet.url} rel='noreferrer' target='_blank'>
                    site
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='projet__video'>
        <video src={projet.video.url} ref={videoRefs} loop></video>
      </section>
      <section className='projet__images'>
        <h2>Illustrations du site</h2>
        <ScrollContainer vertical={false} hideScrollbars={false}>
          {projet.images_pc.map((image, i) => {
            return <img src={image.url} alt={image.alternativeText} key={i} />
          })}
        </ScrollContainer>
        <ScrollContainer vertical={false} hideScrollbars={false}>
          {projet.images_mobile.map((image, i) => {
            return <img src={image.url} alt={image.alternativeText} key={i} />
          })}
        </ScrollContainer>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps<ProjetProps> = async ({
  params,
}) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query<{ projets: [ProjetPageInterface] }>({
    query: GET_PROJECT_DATA,
    variables: {
      slug: params!.slug,
    },
  })

  return {
    props: {
      projet: data.projets[0],
    },
    revalidate: 5,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const paths = await client
    .query<{ projets: ProjetPageInterface[] }>({ query: GET_PROJECTS_PATHS })
    .then(({ data }) => data.projets.map((projet) => `/projet/${projet.slug}`))

  return {
    paths: paths,
    fallback: false,
  }
}

export default ProjetPage
