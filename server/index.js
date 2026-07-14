import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

// --- Middleware ---
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow same-origin / server-to-server (no origin) and whitelisted origins
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      return cb(null, true) // relax in dev; tighten for production if needed
    },
  })
)
app.use(express.json({ limit: '1mb' }))

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api', apiLimiter)

// --- Routes ---
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    time: new Date().toISOString(),
  })
})

app.use('/api/contact', contactRoutes)

app.use((_req, res) => res.status(404).json({ success: false, message: 'Not found' }))

// --- Startup ---
async function start() {
  const uri = process.env.MONGODB_URI
  if (uri) {
    try {
      await mongoose.connect(uri)
      console.log('✅ MongoDB connected')
    } catch (err) {
      console.error('⚠️  MongoDB connection failed — API will run without persistence:', err.message)
    }
  } else {
    console.warn('⚠️  MONGODB_URI not set — API will run without persistence.')
  }

  app.listen(PORT, () => console.log(`🚀 Shansofts API running on http://localhost:${PORT}`))
}

start()
