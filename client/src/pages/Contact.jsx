import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const initialForm = { name: '', email: '', company: '', service: '', message: '' }

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: FiPhone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: site.address, href: null },
  ]

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Shansofts to discuss your web, mobile or software project. Request a free quote today."
        path="/contact"
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Contact us"
            title="Let's talk about your project"
            subtitle="Tell us what you're building and we'll get back to you within one business day."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-app grid gap-8 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((c) => {
                const Icon = c.icon
                const inner = (
                  <div className="card flex items-center gap-4 hover:-translate-y-0.5 hover:shadow-card-hover">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-accent-100 text-brand-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400">{c.label}</div>
                      <div className="text-sm font-semibold text-slate-800">{c.value}</div>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a key={c.label} href={c.href} className="block transition-transform">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                )
              })}

              <div className="card mt-auto bg-gradient-to-br from-brand-600 to-grape-600 text-white">
                <h3 className="font-display font-semibold text-white">Why work with us?</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-50">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-300" /> Free project consultation</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-300" /> Transparent, fixed pricing</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-300" /> Dedicated project manager</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Service
                  </label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Cloud &amp; DevOps</option>
                    <option>AI &amp; Automation</option>
                    <option>E-Commerce</option>
                    <option>UI/UX Design</option>
                    <option>Custom Software</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Project details <span className="text-brand-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline and budget..."
                  className={inputClass}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  <FiCheckCircle /> Thanks! Your message has been sent. We&apos;ll be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <FiAlertCircle /> {error}
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
                {status === 'loading' ? 'Sending...' : (<>Send message <FiSend /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  )
}
