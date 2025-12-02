import mongoose, { Schema, Model, models } from 'mongoose'

export interface IImage {
  title: string
  slug: string
  desc: string
  url: string
  isOwned?: boolean
  tag?: string
  price: number
}

const ImageSchema = new Schema<IImage>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  desc: { type: String, required: true },
  url: { type: String, required: true },
  isOwned: { type: Boolean, default: false },
  tag: { type: String },
  price: { type: Number, required: true }
})

const Image: Model<IImage> = models.Image || mongoose.model<IImage>('Image', ImageSchema)

export default Image
