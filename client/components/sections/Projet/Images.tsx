import { ProjetPage } from '../../../interfaces'
import { Image } from './Image'

interface ImagesProps {
  projet: ProjetPage
}

export const Images = ({ projet }: ImagesProps) => {
  return (
    <>
      {projet.images_pc.map((image, i) => {
        return <Image src={image.url} alt={image.alternativeText} key={i} />
      })}
      <div className='projet__images__mobile'>
        {projet.images_mobile.map((image, i) => {
          return <Image src={image.url} alt={image.alternativeText} key={i} />
        })}
      </div>
    </>
  )
}
