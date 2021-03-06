import { render, screen } from '@testing-library/react'
import { useRef } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { Projets } from './Projets'
import { ProjetHomepage } from '../../../interfaces'

describe('Projets', () => {
  const { result: projetsRef } = renderHook(() => useRef(null))

  const projets: ProjetHomepage[] = [
    {
      nom: 'nom',
      slug: 'nom',
      banner: {
        alternativeText: 'alternativetext',
        formats: {},
        url: 'url',
      },
      short_description: 'short description',
      keywords: 'keywords',
    },
    {
      nom: 'nom2',
      slug: 'nom2',
      banner: {
        alternativeText: 'alternativetext2',
        formats: {},
        url: 'url2',
      },
      short_description: 'short description2',
      keywords: 'keywords2',
    },
  ]

  const projectTestId = 'projets__item'

  it('should render n projets', async () => {
    render(<Projets projets={projets} projetsRef={projetsRef.current} />)

    expect(await screen.findAllByTestId(projectTestId)).toHaveLength(
      projets.length
    )
  })
})
