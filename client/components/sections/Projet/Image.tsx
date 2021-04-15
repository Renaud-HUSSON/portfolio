import { IntersectionOptions, useInView } from 'react-intersection-observer'

interface ImageProps {
  src: string
  alt: string
}

export const Image = ({ src, alt }: ImageProps) => {
  const options: IntersectionOptions = {
    threshold: 0.4,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options)

  return (
    <img
      className={inView ? 'projet__galerie__image--visible' : ''}
      src={src}
      alt={alt}
      ref={ref}
    />
  )
}
