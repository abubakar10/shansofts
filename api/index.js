// Vercel serverless entry point.
// All requests to /api/* are rewritten here (see vercel.json) and handled by the
// Express app. The Express app itself keeps the /api/* route prefixes, and the
// original request URL is preserved, so routing works exactly like it does locally.
import app from '../server/app.js'

export default app
