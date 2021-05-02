import { screen, render } from '@testing-library/react'
import { Presentation } from './Presentation'

describe('About Presentation', () => {
  const description = 'Test description'

  it('should display presentation text', async () => {
    render(<Presentation description={description} />)

    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
