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

export type formatImage = Record<imageFormats, imageFormatContent>

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
}

export type Projet = ProjetHomepage & {
  id: number
  images_mobile: uploadImage[]
  image_pc: uploadImage[]
  long_description: string
}
