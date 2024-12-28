import mongoose from 'mongoose'

const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL

if (!MONGO_URL_LOCAL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(uri, options) {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URL_LOCAL, opts, {
      useUnifiedTopology: true,
      useIndexes: true
    }).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  console.log("Connected to Database: " + cached.conn)
  return cached.conn

}

export default dbConnect


// const mongoose = require('mongoose');
// const uri = "mongodb+srv://ammanabua:<password>@cluster0.aviee.mongodb.net/?retryWrites=true&w=majority";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);

// export default run;
