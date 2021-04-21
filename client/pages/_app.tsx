import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import '../styles/index.scss'
import { variants, variantsPink, mainVariant } from '../utils/framerMotion'

function MyApp({ Component, pageProps, router }: AppProps) {
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div key={router.route}>
        <motion.div variants={mainVariant} initial='visible' exit='hidden'>
          <Component {...pageProps} />
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
