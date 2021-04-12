import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'
import { ProjetPage } from '../../../interfaces'

describe('Project Video', () => {
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

  const videoTestId = 'project-video'

  it('should trigger video playing when the video is in view', () => {
    render(<Video projet={projet} />)

    mockAllIsIntersecting(false)
    expect(screen.getByTestId(videoTestId).dataset.playing).toBe('false')

    mockAllIsIntersecting(true)
    expect(screen.getByTestId(videoTestId).dataset.playing).toBe('true')
  })
})
