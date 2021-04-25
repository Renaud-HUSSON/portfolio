import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticProps } from 'next'
import { Competences } from '../../components/sections/About/Competences'
import { Presentation } from '../../components/sections/About/Presentation'
import { GET_ABOUT_DATA } from '../../graphql/queries'
import { AboutPage } from '../../interfaces'

type AProposProps = AboutPage

const APropos = ({ about, competences }: AProposProps) => {
  return (
    <main className='a-propos'>
      <Presentation description={about.description} />
      <Competences competences={competences} />
    </main>
  )
}

export const getStaticProps: GetStaticProps<AboutPage> = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query<AboutPage>({ query: GET_ABOUT_DATA })

  return {
    props: data,
  }
}

export default APropos
