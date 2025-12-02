
const BASE_URL =
  typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    : ''

export type ImageItem = {
  _id?: string
  title?: string
  description?: string
  tag?: string
  price?: number
  quantity?: number
  [key: string]: any
}

export async function getImages(): Promise<ImageItem[]> {
  const res = await fetch(`${BASE_URL}/api/images`)
  const body = await res.json()
  return body.images as ImageItem[]
}

export async function getFamilyPortrait(): Promise<ImageItem[]> {
  const images = await getImages()
  return images.filter((img) => img.tag === 'family-portrait')
}

export async function getTamasArt(): Promise<ImageItem[]> {
  const images = await getImages()
  return images.filter((img) => img.tag === 'tamas-art')
}
