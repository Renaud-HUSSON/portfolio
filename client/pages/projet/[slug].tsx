import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_PROJECTS_PATHS, GET_PROJECT_DATA } from '../../graphql/queries'
import { ProjetPage as ProjetPageInterface } from '../../interfaces'
import { Presentation } from '../../components/sections/Projet/Presentation'
import { Images } from '../../components/sections/Projet/Images'
import { Video } from '../../components/sections/Projet/Video'
import { NextSeo } from 'next-seo'

interface ProjetProps {
  projet: ProjetPageInterface
}

const ProjetPage = ({ projet }: ProjetProps) => {
  if (!projet) {
    projet = {
      nom: '',
      slug: '',
      images_mobile: [],
      images_pc: [],
      long_description: '',
      technologies: [],
      video: {
        alternativeText: '',
        url: '',
      },
      debut: new Date(),
      fin: new Date(),
    }
  }

  return (
    <main className='projet'>
      <NextSeo
        title={`Renaud HUSSON - ${projet.nom}`}
        description={projet.long_description}
        openGraph={{
          title: `Renaud HUSSON - ${projet.nom}`,
          description: projet.long_description,
          type: 'website',
          images: [
            {
              url: 'https://renaudhusson.fr/ogbanner.big.jpg',
              width: 1920,
              height: 1080,
              alt: 'Site de Renaud HUSSON',
            },
            {
              url: 'https://renaudhusson.fr/ogbanner.jpg',
              width: 720,
              height: 405,
              alt: 'Site de Renaud HUSSON',
            },
            {
              url: 'https://renaudhusson.fr/ogbanner.min.jpg',
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
      <section className='projet__galerie'>
        <Video projet={projet} />
        <Images projet={projet} />
      </section>
      <Presentation projet={projet} />
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
      projet: data?.projets?.[0],
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
    fallback: true,
  }
}

export default ProjetPage
