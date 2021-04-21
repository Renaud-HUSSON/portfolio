import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      <Link href='/' scroll={false}>
        <a>RENAUD HUSSON</a>
      </Link>
      <Link href='/a-propos' scroll={false}>
        <a>À PROPOS</a>
      </Link>
    </nav>
  )
}
