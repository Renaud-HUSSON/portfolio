import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  const updateMatches = () => {
    setMatches(window.matchMedia(query).matches)
  }

  useEffect(() => {
    updateMatches()

    window.addEventListener('resize', updateMatches)

    return () => {
      window.removeEventListener('resize', updateMatches)
    }
  }, [])

  return matches
}
