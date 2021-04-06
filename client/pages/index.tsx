import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPropsResult } from 'next'
import { HeroBanner } from '../components/Home/HeroBanner'
import { Projets } from '../components/Home/Projets'
import { GET_HOME_DATA } from '../graphql/queries'
import { Banner, ProjetHomepage } from '../interfaces/index'

interface HomeProps {
  banner: Banner
  projets: ProjetHomepage[]
}

const Home = ({ banner, projets }: HomeProps) => (
  <main className='home'>
    <HeroBanner banner={banner} />
    <Projets projets={projets} />
  </main>
)

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
