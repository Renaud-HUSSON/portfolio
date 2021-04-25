export type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type ImageFormats = 'thumbnail' | 'large' | 'medium' | 'small'

export type ImageFormatContent = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: string
  url: string
}

export type CoreMediaFile = {
  alternativeText: string
  url: string
}

export type FormatImage = OptionalRecord<ImageFormats, ImageFormatContent>

export type ImageProps = {
  formats: FormatImage
}

export type Image = CoreMediaFile & ImageProps

export type Video = CoreMediaFile

export type Technologie = {
  nom: string
  image: Image
}
export type Banner = {
  description: string
}

export type ProjetHomepage = {
  nom: string
  banner: Image
  short_description: string
  keywords: string
  slug: string
}

export type ProjetPage = {
  nom: string
  slug: string
  images_mobile: Image[]
  images_pc: Image[]
  long_description: string
  technologies: Technologie[]
  url?: string
  github?: string
  video: Video
  debut: Date
  fin: Date
}

export type Projet = ProjetHomepage & ProjetPage

export type Competence = {
  technology: Technologie
}

export type About = {
  description: string
}

export type AboutPage = {
  about: About
  competences: Competence[]
}

export type Point = {
  x: number
  y: number
  z: number
}

export type GetFibonacciSpherePointsResult = Point[]

export type GetFibonacciSpherePoints = (
  samples: number,
  radius?: number,
  randomize?: boolean
) => GetFibonacciSpherePointsResult
