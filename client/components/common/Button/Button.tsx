import Link from 'next/link'

interface ButtonProps {
  link?: string
  text: string
  arrow?: boolean
  className?: string
  [x: string]: any
}

export const Button = ({
  link = '',
  text,
  arrow = false,
  className = '',
  ...rest
}: ButtonProps) => {
  const content = (
    <span>
      {text}{' '}
      {arrow && (
        <svg
          width='21'
          height='12'
          viewBox='0 0 21 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-testid='button-svg'
        >
          <path
            d='M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75L10 6.75V5.25L0 5.25L0 6.75ZM10 6.75L20 6.75V5.25L10 5.25V6.75Z'
            fill='#58ADE2'
          />
        </svg>
      )}
    </span>
  )

  return link ? (
    <Link href={link}>
      <a className={`button ${className}`} {...rest} data-testid='button-link'>
        {content}
      </a>
    </Link>
  ) : (
    <button
      className={`button ${className}`}
      {...rest}
      data-testid='button-button'
    >
      {content}
    </button>
  )
}
