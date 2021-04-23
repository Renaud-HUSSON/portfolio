import { ReactNode, useEffect } from 'react'
import { initGA, logPageView } from '../../../utils/analytics'

interface GaProps {
  children: ReactNode
}

export const Ga = ({ children }: GaProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }, [])

  return <>{children}</>
}
