import Link from 'next/link'
import { Socials } from '../Socials/Socials'

export const Footer = () => {
  return (
    <footer>
      <div className='footer__links'>
        <Link href='/' scroll={false}>
          <a>Accueil</a>
        </Link>
        <Link href='/a-propos' scroll={false}>
          <a>À propos</a>
        </Link>
        <Link href='/mentions-legales' scroll={false}>
          <a>Mentions légales</a>
        </Link>
      </div>
      <Socials className='footer__socials' />
    </footer>
  )
}
