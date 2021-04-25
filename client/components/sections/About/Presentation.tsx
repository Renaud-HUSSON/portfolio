import { About } from '../../../interfaces'

type PresentationProps = About

export const Presentation = ({ description }: PresentationProps) => {
  return (
    <section className='a-propos__a-propos'>
      <h2>À Propos</h2>
      <p>{description}</p>
    </section>
  )
}
