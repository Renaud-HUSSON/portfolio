import { ReactChild } from 'react'
import { Nav } from '../Nav/Nav'

interface LayoutProps {
  children: ReactChild
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
