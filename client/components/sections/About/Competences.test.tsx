import { screen, render } from '@testing-library/react'
import { Competence } from '../../../interfaces'
import { Competences } from './Competences'

describe('About Skills', () => {
  const competences: Competence[] = [
    {
      technology: {
        image: { alternativeText: 'test', formats: {}, url: 'test' },
        nom: 'test',
      },
    },
    {
      technology: {
        image: { alternativeText: 'test1', formats: {}, url: 'test1' },
        nom: 'test1',
      },
    },
    {
      technology: {
        image: { alternativeText: 'test2', formats: {}, url: 'test2' },
        nom: 'test2',
      },
    },
  ]

  beforeEach(() => {
    render(<Competences competences={competences} />)
  })

  it('shoud render n skills', () => {
    const testId = 'list__skill'

    expect(screen.getAllByTestId(testId)).toHaveLength(competences.length)
  })
})
