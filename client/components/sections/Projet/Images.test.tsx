import { render, screen } from '@testing-library/react'
import { ProjetPage } from '../../../interfaces'
import { Images } from './Images'

describe('Project Images', () => {
  const projet: ProjetPage = {
    nom: 'nom',
    slug: 'nom',
    images_pc: [
      {
        alternativeText: 'alternativetext',
        formats: {},
        url: 'url',
      },
    ],
    images_mobile: [
      {
        alternativeText: 'mobile alternativetext',
        formats: {},
        url: 'url',
      },
    ],
    long_description: 'Very long description',
    technologies: [{ nom: 'nextjs' }, { nom: 'sass' }],
    url: 'https://url.com',
    github: 'https://url.com',
    video: {
      alternativeText: 'video',
      url: 'https://videourl.com',
    },
    debut: new Date(),
    fin: new Date(),
  }

  beforeEach(() => {
    render(<Images projet={projet} />)
  })

  it('should render illustrations', () => {
    expect(screen.getByAltText('alternativetext')).toBeInTheDocument()
    expect(screen.getByAltText('mobile alternativetext')).toBeInTheDocument()
  })

  it('should render title', () => {
    expect(screen.getByText('Illustrations du site')).toBeInTheDocument()
  })
})
