import mongoose, { Schema, models, Model } from 'mongoose'

export interface IEvent {
  title: string
  info: string
  host: string
  price?: number[]
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    info: { type: String, required: true },
    host: { type: String, required: true },
    price: { type: [Number] }
  },
  { timestamps: true }
)

const Event: Model<IEvent> = models.Event || mongoose.model<IEvent>('Event', EventSchema)

export default Event
