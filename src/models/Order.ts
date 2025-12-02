import mongoose, { Schema, models, Model, Types } from 'mongoose'

export interface IOrder {
  userId?: Types.ObjectId
  details?: Types.ObjectId[]
  total: number
  status: string
}

const OrderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  details: [{ type: Schema.Types.ObjectId, ref: 'Art' }],
  total: { type: Number, required: true },
  status: { type: String, required: true }
})

const Order: Model<IOrder> = models.Order || mongoose.model<IOrder>('Order', OrderSchema)

export default Order
