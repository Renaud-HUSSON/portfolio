import ScrollContainer from 'react-indiana-drag-scroll'
import { ProjetPage } from '../../../interfaces'

interface ImagesProps {
  projet: ProjetPage
}

export const Images = ({ projet }: ImagesProps) => {
  return (
    <section className='projet__images'>
      <h2>Illustrations du site</h2>
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
