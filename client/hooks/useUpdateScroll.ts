import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export const useUpdateScroll = (transitionDuration: number) => {
  const router = useRouter()

  useEffect(() => {
    window.setTimeout(() => {
      window.scrollTo(0, 0)
    }, transitionDuration * 1000)
  }, [router.pathname])
}
