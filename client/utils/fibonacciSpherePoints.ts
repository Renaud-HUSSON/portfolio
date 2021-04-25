import { GetFibonacciSpherePoints, Point } from '../interfaces'

export const getFibonacciSpherePoints: GetFibonacciSpherePoints = (
  samples: number,
  radius?: number,
  randomize?: boolean
) => {
  samples = samples || 1
  radius = radius || 1
  randomize = randomize || false

  let random = 1
  if (randomize === true) {
    random = Math.random() * samples
  }

  const points: Point[] = []
  const offset = 2 / samples
  const increment = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < samples; i++) {
    let y = i * offset - 1 + offset / 2

    const distance = Math.sqrt(1 - Math.pow(y, 2))
    const phi = ((i + random) % samples) * increment

    let x = Math.cos(phi) * distance
    let z = Math.sin(phi) * distance

    x = x * radius
    y = y * radius
    z = z * radius
    const point: Point = {
      x,
      y,
      z,
    }
    points.push(point)
  }

  return points
}
