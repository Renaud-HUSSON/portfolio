import { render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { ProjetHomepage } from '../../../interfaces'
import { Projet } from './Projet'

describe('Projet', () => {
  const projet: ProjetHomepage = {
    nom: 'nom',
    slug: 'nom',
    banner: {
      alternativeText: 'alternativetext',
      formats: {},
      url: 'url',
    },
    short_description: 'short description',
    keywords: 'keywords',
  }
  const projectTestId = 'projets__item'
  const projectVisibleClassName = 'home__projets__item--visible'
  const index = 1

  beforeEach(() => {
    render(<Projet projet={projet} index={index} />)
  })

  it('should display the project passed in props', () => {
    expect(screen.getByText(projet.nom, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(index + 1, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(projet.short_description)).toBeInTheDocument()
    expect(screen.getByText(projet.keywords)).toBeInTheDocument()
    expect(
      screen.getByAltText(projet.banner.alternativeText)
    ).toBeInTheDocument()
  })

  it('should add class when the project is visible', () => {
    mockAllIsIntersecting(false)
    expect(
      screen
        .getByTestId(projectTestId)
        .classList.contains(projectVisibleClassName)
    ).toBe(false)

    mockAllIsIntersecting(true)
    expect(screen.getByTestId(projectTestId)).toHaveClass(
      projectVisibleClassName
    )
  })
})
