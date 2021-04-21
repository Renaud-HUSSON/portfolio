export const variants = {
  hidden: {
    x: '100%',
  },
  exit: { x: '-100%', transition: { duration: 1, ease: 'linear' } },
}

export const variantsPink = {
  hidden: {
    x: '100%',
    scaleX: 0.75,
    originX: 0,
  },
  exit: {
    x: '0%',
    transition: { duration: 0.75, delay: 0.5, ease: 'easeIn' },
  },
}

export const mainVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.75,
      duration: 0,
    },
  },
}
