import mongoose, { ConnectOptions } from 'mongoose'

const MONGO_URL = process.env.MONGO_URL as string | undefined

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local')
}

type Cached = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: Cached | undefined
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(uri?: string, options?: ConnectOptions) {
  if (cached!.conn) {
    return cached!.conn
  }

  if (!cached!.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false
    }

    cached!.promise = mongoose
      .connect(MONGO_URL!, opts)
      .then((mongooseInstance) => {
        return mongooseInstance
      })
  }
  cached!.conn = await cached!.promise
  console.log('Connected to Database: ' + cached!.conn)
  return cached!.conn
}

export default dbConnect
