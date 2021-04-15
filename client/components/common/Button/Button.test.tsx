import { screen, render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  const buttonTestId = 'button-button'
  const linkTestId = 'button-link'
  const svgTestId = 'button-svg'
  const classNames = 'button test'
  const rest: Record<string, string> = { test: 'test', yes: 'yes' }
  const text = 'test'

  it('should render the given text in the component', () => {
    render(<Button text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should add classNames to the button', () => {
    render(<Button text={text} className={classNames} />)

    expect(screen.getByTestId(buttonTestId)).toHaveClass(classNames)
  })

  it('should add rest properties to the component', () => {
    render(<Button text={text} className={classNames} {...rest} />)

    Object.keys(rest).map((key) => {
      expect(screen.getByTestId(buttonTestId)).toHaveAttribute(key, rest[key])
    })
  })

  it('should render a simple button without link or arrow', () => {
    render(<Button text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.queryByTestId(buttonTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(linkTestId)).toBeNull()
    expect(screen.queryByTestId(svgTestId)).toBeNull()
  })

  it('should render a link button without an arrow', () => {
    render(<Button text={text} link='https://test.com' />)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.queryByTestId(buttonTestId)).toBeNull()
    expect(screen.queryByTestId(linkTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(svgTestId)).toBeNull()
  })

  it('should render a button with an arrow but without a link', () => {
    render(<Button text={text} arrow={true} />)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.queryByTestId(buttonTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(linkTestId)).toBeNull()
    expect(screen.queryByTestId(svgTestId)).toBeInTheDocument()
  })

  it('should render a link button with an arrow', () => {
    render(<Button text={text} link='https://test.com' arrow={true} />)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.queryByTestId(buttonTestId)).toBeNull()
    expect(screen.queryByTestId(linkTestId)).toBeInTheDocument()
    expect(screen.queryByTestId(svgTestId)).toBeInTheDocument()
  })
})
