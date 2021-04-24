import Link from 'next/link'
import { Socials } from '../Socials/Socials'

export const Footer = () => {
  return (
    <footer>
      <div className='footer__links'>
        <Link href='/'>
          <a>Accueil</a>
        </Link>
        <Link href='/a-propos'>
          <a>À propos</a>
        </Link>
        <Link href='/mentions-legales'>
          <a>Mentions légales</a>
        </Link>
      </div>
      <Socials className='footer__socials' />
    </footer>
  )
}
