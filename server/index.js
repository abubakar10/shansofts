import 'dotenv/config'
import app from './app.js'
import { connectDB } from './db.js'
import { isMailConfigured, verifyMailer } from './mailer.js'

const PORT = process.env.PORT || 5000

// Connect eagerly in local/long-running environments (optional — the API also
// connects lazily per request via the /api middleware).
connectDB()
  .then((conn) => {
    if (conn) console.log('✅ MongoDB connected')
    else console.warn('⚠️  MONGODB_URI not set — API will run without persistence.')
  })
  .catch((err) => console.error('⚠️  MongoDB connection failed:', err.message))

// Report email configuration status.
if (!isMailConfigured()) {
  console.warn('✉️  Email not configured — contact form will save but NOT send email. Set SMTP_* env vars.')
} else {
  verifyMailer()
    .then(() => console.log('✅ Email (SMTP) ready'))
    .catch((err) => console.error('⚠️  SMTP verification failed:', err.message))
}

app.listen(PORT, () => console.log(`🚀 Shansofts API running on http://localhost:${PORT}`))
