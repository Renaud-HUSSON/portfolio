import { About } from '../../../interfaces'

type PresentationProps = About

export const Presentation = ({ description }: PresentationProps) => {
  return (
    <section className='a-propos__a-propos'>
      <h2>
        <span>À Propos</span>
      </h2>
      <pre>
        <p>{description}</p>
      </pre>
    </section>
  )
}
