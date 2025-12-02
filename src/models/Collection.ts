import mongoose, { Schema, models, Model, Types } from 'mongoose'

export interface ICollectionItem {
  id: Types.ObjectId
}

export interface ICollection {
  title: string
  desc: string
  items?: ICollectionItem[]
}

const CollectionSchema = new Schema<ICollection>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    items: [
      {
        id: { type: Schema.Types.ObjectId, ref: 'Art' }
      }
    ]
  },
  { timestamps: true }
)

const Collection: Model<ICollection> =
  models.Collection || mongoose.model<ICollection>('Collection', CollectionSchema)

export default Collection
