import mongoose, { Schema, models, Model, Types } from 'mongoose'

export interface IUser {
  name: string
  email: string
  password: string
  privateCollection?: {
    name?: string
    items?: Types.ObjectId[]
  }
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  privateCollection: {
    name: { type: String },
    items: [{ type: Schema.Types.ObjectId, ref: 'Art' }]
  }
})

const User: Model<IUser> = models.User || mongoose.model<IUser>('User', UserSchema)

export default User
