import ScrollContainer from 'react-indiana-drag-scroll'
import { IntersectionOptions, useInView } from 'react-intersection-observer'
import { ProjetPage } from '../../../interfaces'

interface ImagesProps {
  projet: ProjetPage
}

export const Images = ({ projet }: ImagesProps) => {
  const options: IntersectionOptions = {
    threshold: 0.3,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options)

  return (
    <section
      className={`projet__images ${inView && 'projet__images--visible'}`}
      ref={ref}
    >
      <h2>
        <span>Illustrations du site</span>
      </h2>
      <ScrollContainer vertical={false} hideScrollbars={false}>
        {projet.images_pc.map((image, i) => {
          return <img src={image.url} alt={image.alternativeText} key={i} />
        })}
      </ScrollContainer>
      <ScrollContainer vertical={false} hideScrollbars={false}>
        {projet.images_mobile.map((image, i) => {
          return <img src={image.url} alt={image.alternativeText} key={i} />
        })}
      </ScrollContainer>
    </section>
  )
}
