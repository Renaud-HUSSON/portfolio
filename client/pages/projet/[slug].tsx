import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GET_PROJECTS_PATHS, GET_PROJECT_DATA } from '../../graphql/queries'
import { ProjetPage as ProjetPageInterface } from '../../interfaces'
import { Presentation } from '../../components/sections/Projet/Presentation'
import { Images } from '../../components/sections/Projet/Images'
import { Video } from '../../components/sections/Projet/Video'

interface ProjetProps {
  projet: ProjetPageInterface
}

const ProjetPage = ({ projet }: ProjetProps) => {
  return (
    <main>
      <Presentation projet={projet} />
      <Video projet={projet} />
      <Images projet={projet} />
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
