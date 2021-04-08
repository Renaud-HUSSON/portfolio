export type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type imageFormats = 'thumbnail' | 'large' | 'medium' | 'small'

export type imageFormatContent = {
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

export type formatImage = OptionalRecord<imageFormats, imageFormatContent>

export type uploadImage = {
  alternativeText: string
  formats: formatImage
  url: string
}
export type Banner = {
  description: string
}

export type ProjetHomepage = {
  nom: string
  banner: uploadImage
  short_description: string
  keywords: string
}

export type Projet = ProjetHomepage & {
  id: number
  slug: string
  images_mobile: uploadImage[]
  image_pc: uploadImage[]
  long_description: string
}
