import mongoose from 'mongoose'

// Cache the connection across serverless invocations so we don't open a new
// MongoDB connection on every request (which would exhaust the connection pool).
let cached = global._shansoftsMongoose
if (!cached) {
  cached = global._shansoftsMongoose = { conn: null, promise: null }
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI
  if (!uri) return null
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 8000 })
      .then((m) => m)
      .catch((err) => {
        cached.promise = null // allow retry on next request
        throw err
      })
  }

  cached.conn = await cached.promise
  return cached.conn
}
