import { HeroBanner } from '../components/Home/HeroBanner'

interface HomeProps {}

const Home = ({}: HomeProps) => (
  <main className='home'>
    <HeroBanner />
  </main>
)

export default Home
