import { IntersectionOptions, useInView } from 'react-intersection-observer'
import { ProjetPage } from '../../../interfaces'

interface VideoProps {
  projet: ProjetPage
}

export const Video = ({ projet }: VideoProps) => {
  const options: IntersectionOptions = {
    threshold: 0.4,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options)

  return (
    <video
      src={projet.video.url}
      loop
      data-testid='project-video'
      autoPlay
      ref={ref}
      className={inView ? 'projet__galerie__video--visible' : ''}
    ></video>
  )
}
