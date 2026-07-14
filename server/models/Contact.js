import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    company: { type: String, trim: true, maxlength: 160, default: '' },
    service: { type: String, trim: true, maxlength: 80, default: '' },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true }
)

export default mongoose.model('Contact', contactSchema)
