import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Ga } from '../../components/common/Ga/Ga'
import { Competences } from '../../components/sections/About/Competences'
import { Presentation } from '../../components/sections/About/Presentation'
import { GET_ABOUT_DATA } from '../../graphql/queries'
import { AboutPage } from '../../interfaces'

type AProposProps = AboutPage

const APropos = ({ about, competences }: AProposProps) => {
  return (
    <Ga>
      <NextSeo
        title='Renaud HUSSON - À Propos'
        description="Cette page permet d'en apprendre plus sur moi, ainsi que découvrir mes compétences"
        openGraph={{
          title: 'Renaud HUSSON - À Propos',
          description:
            "Cette page permet d'en apprendre plus sur moi, ainsi que découvrir mes compétences",
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
      <main className='a-propos'>
        <Presentation description={about.description} />
        <Competences competences={competences} />
      </main>
    </Ga>
  )
}

export const getStaticProps: GetStaticProps<AboutPage> = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query<AboutPage>({ query: GET_ABOUT_DATA })

  return {
    props: {
      about: data.about ?? '',
      competences: data.competences,
    },
    revalidate: 600,
  }
}

export default APropos
