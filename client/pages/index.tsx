import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetStaticPropsResult } from 'next'
import { HeroBanner } from '../components/Home/HeroBanner'
import { GET_HOME_DATA } from '../graphql/queries'
import { BannerInterface } from '../interfaces/index'

interface HomeProps {
  banner: BannerInterface
}

const Home = ({ banner }: HomeProps) => (
  <main className='home'>
    <HeroBanner banner={banner} />
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
      banner: {
        description: data.banner.description,
      },
    },
    revalidate: 600,
  }
}

export default Home
