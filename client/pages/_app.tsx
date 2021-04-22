import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import { Layout } from '../components/common/Layout/Layout'
import { useUpdateScroll } from '../hooks/useUpdateScroll'
import '../styles/index.scss'
import { variants, variantsPink, mainVariant } from '../utils/framerMotion'

function MyApp({ Component, pageProps, router }: AppProps) {
  useUpdateScroll(1.25)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div key={router.route}>
        <motion.div variants={mainVariant} initial='visible' exit='hidden'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
        <motion.div
          variants={variants}
          initial={false}
          animate='hidden'
          exit='exit'
          className='page-transition page-transition-black'
        >
          <motion.div
            variants={variantsPink}
            initial={false}
            animate='hidden'
            exit='exit'
            className='page-transition page-transition-pink'
          ></motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
