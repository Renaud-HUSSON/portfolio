import { useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProjetPage } from '../../../interfaces'

interface VideoProps {
  projet: ProjetPage
}

export const Video = ({ projet }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [IOVideoRef, videoInView] = useInView({
    threshold: 0.2,
  })

  const videoRefs = useCallback(
    (node: HTMLVideoElement) => {
      videoRef.current = node
      IOVideoRef(node)
    },
    [IOVideoRef]
  )

  useEffect(() => {
    if (videoInView) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [videoInView])

  return (
    <section className='projet__video'>
      <video src={projet.video.url} ref={videoRefs} loop></video>
    </section>
  )
}
