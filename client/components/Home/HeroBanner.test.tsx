import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { Banner } from '../../interfaces'
import { renderHook } from '@testing-library/react-hooks'

import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  const banner: Banner = {
    description: 'Test de la description de la banner',
  }

  const { result: ref } = renderHook(() => useRef(null))

  it('should render "Développeur web frontend"', () => {
    render(<HeroBanner banner={banner} projetsRef={ref.current} />)

    expect(screen.getByText('Développeur web frontend')).toBeInTheDocument()
  })

  it("should use banner's description", () => {
    render(<HeroBanner banner={banner} projetsRef={ref.current} />)

    expect(screen.getByText(banner.description)).toBeInTheDocument()
  })

  it('should scroll down when clicking the arrow', () => {
    const handleArrowClickMock = jest.fn()

    render(
      <HeroBanner
        banner={banner}
        projetsRef={ref.current}
        handleArrowClick={handleArrowClickMock}
      />
    )

    fireEvent.click(screen.getByTestId('scroll-down-arrow'))

    expect(handleArrowClickMock).toBeCalled()
  })
})
