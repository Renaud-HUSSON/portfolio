import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPropsResult } from 'next'
import { useRef } from 'react'
import { HeroBanner } from '../components/sections/Homepage/HeroBanner'
import { Projets } from '../components/sections/Homepage/Projets'
import { GET_HOME_DATA } from '../graphql/queries'
import { Banner, ProjetHomepage } from '../interfaces/index'
import { NextSeo } from 'next-seo'
import { Ga } from '../components/common/Ga/Ga'
import { Socials } from '../components/common/Socials/Socials'

interface HomeProps {
  banner: Banner
  projets: ProjetHomepage[]
}

const Home = ({ banner, projets }: HomeProps) => {
  const projetsRef = useRef<HTMLElement>(null)

  return (
    <Ga>
      <main className='home'>
        <NextSeo
          title='Renaud HUSSON - Développeur web à Toulouse'
          description={banner.description}
          openGraph={{
            title: 'Renaud HUSSON - Développeur web frontend',
            description: banner.description,
            type: 'website',
            images: [
              {
                url: 'https://renaudhusson.fr/ogbanner.big.png',
                width: 1920,
                height: 1080,
                alt: 'Site de Renaud HUSSON',
              },
              {
                url: 'https://renaudhusson.fr/ogbanner.png',
                width: 720,
                height: 405,
                alt: 'Site de Renaud HUSSON',
              },
              {
                url: 'https://renaudhusson.fr/ogbanner.min.png',
                width: 300,
                height: 169,
                alt: 'Site de Renaud HUSSON',
              },
            ],
            profile: {
              firstName: 'Renaud',
              lastName: 'HUSSON',
            },
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
        <HeroBanner banner={banner} projetsRef={projetsRef} />
        <Projets projets={projets} projetsRef={projetsRef} />
        <Socials className='socials' />
      </main>
    </Ga>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query<HomeProps>({
    query: GET_HOME_DATA,
  })

  return {
    props: {
      banner: data.banner,
      projets: data.projets,
    },
    revalidate: 600,
  }
}

export default Home
