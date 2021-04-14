import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        <a>RENAUD HUSSON</a>
      </Link>
      <Link href='/a-propos'>
        <a>À PROPOS</a>
      </Link>
    </nav>
  )
}
