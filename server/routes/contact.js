import { Router } from 'express'
import mongoose from 'mongoose'
import Contact from '../models/Contact.js'

const router = Router()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// POST /api/contact — create a new contact enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body || {}

    const errors = []
    if (!name || !name.trim()) errors.push('Name is required.')
    if (!email || !emailRegex.test(email)) errors.push('A valid email is required.')
    if (!message || !message.trim()) errors.push('Message is required.')

    if (errors.length) {
      return res.status(400).json({ success: false, message: errors.join(' ') })
    }

    // If DB isn't connected, don't hard-fail the UX — log and acknowledge.
    if (mongoose.connection.readyState !== 1) {
      console.warn('[contact] MongoDB not connected — enquiry not persisted:', { name, email })
      return res.status(202).json({
        success: true,
        message: 'Message received. (Note: database is not connected in this environment.)',
      })
    }

    const contact = await Contact.create({ name, email, company, service, message })
    return res.status(201).json({ success: true, id: contact._id, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('[contact] error:', err)
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' })
  }
})

// GET /api/contact — list enquiries (basic admin/testing endpoint)
router.get('/', async (_req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ success: true, count: 0, data: [] })
    }
    const data = await Contact.find().sort({ createdAt: -1 }).limit(100)
    return res.json({ success: true, count: data.length, data })
  } catch (err) {
    console.error('[contact] list error:', err)
    return res.status(500).json({ success: false, message: 'Server error.' })
  }
})

export default router
