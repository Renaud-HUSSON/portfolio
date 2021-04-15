import { render, screen } from '@testing-library/react'
import { ProjetPage } from '../../../interfaces'
import { Presentation } from './Presentation'

describe('Project Presentation', () => {
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

  const projetWithoutUrlAndGithub = {
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
    video: {
      alternativeText: 'video',
      url: 'https://videourl.com',
    },
    debut: new Date(),
    fin: new Date(),
  }

  const githubTestId = 'project-github'
  const urlTestId = 'project-url'
  const technologyTestId = 'project-techonology'
  const visitSiteTestId = 'button-link'

  it('should render project properties', () => {
    render(<Presentation projet={projet} />)

    expect(screen.getByText(projet.nom)).toBeInTheDocument()
    expect(screen.getByText(projet.long_description)).toBeInTheDocument()
    expect(screen.getByTestId(githubTestId)).toBeInTheDocument()
    expect(screen.getByTestId(urlTestId)).toBeInTheDocument()
  })

  it('should render project properties but not github and url', () => {
    render(<Presentation projet={projetWithoutUrlAndGithub} />)

    expect(screen.getByText(projet.nom)).toBeInTheDocument()
    expect(screen.getByText(projet.long_description)).toBeInTheDocument()
    expect(screen.queryByTestId(githubTestId)).toBeNull()
    expect(screen.queryByTestId(urlTestId)).toBeNull()
  })

  it('should render technologies', () => {
    render(<Presentation projet={projet} />)

    expect(screen.getAllByTestId(technologyTestId)).toHaveLength(
      projet.technologies.length
    )

    projet.technologies.forEach((technology) => {
      expect(screen.getByText(technology.nom)).toBeInTheDocument()
    })
  })

  it('should render visite site', () => {
    render(<Presentation projet={projet} />)

    expect(screen.getByTestId(visitSiteTestId)).toBeInTheDocument()
  })

  it('should not render visite site', () => {
    render(<Presentation projet={projetWithoutUrlAndGithub} />)

    expect(screen.queryByTestId(visitSiteTestId)).toBeNull()
  })
})
