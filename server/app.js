import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contact.js'
import { connectDB } from './db.js'

const app = express()

// Trust the Vercel/reverse proxy so client IPs (for rate limiting) are correct.
app.set('trust proxy', 1)

// --- CORS ---
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow same-origin / server-to-server (no origin) and whitelisted origins.
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      // Same-domain deployments (frontend + /api on one Vercel project) don't need CORS,
      // so we stay permissive here. Tighten by returning an error for stricter setups.
      return cb(null, true)
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

// Ensure the (cached) database connection is ready before handling API requests.
app.use('/api', async (_req, _res, next) => {
  try {
    await connectDB()
  } catch (err) {
    console.error('[db] connection error:', err.message)
  }
  next()
})

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

export default app
