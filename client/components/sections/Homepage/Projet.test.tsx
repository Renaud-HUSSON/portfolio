import { render, screen } from '@testing-library/react'
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

  const index = 1

  it('should display the project passed in props', () => {
    render(<Projet projet={projet} index={index} />)

    expect(screen.getByText(projet.nom, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(index + 1, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(projet.short_description)).toBeInTheDocument()
    expect(screen.getByText(projet.keywords)).toBeInTheDocument()
    expect(
      screen.getByAltText(projet.banner.alternativeText)
    ).toBeInTheDocument()
  })
})
