import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const initialForm = { name: '', email: '', company: '', service: '', message: '' }

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-heading outline-none transition placeholder:text-body focus:border-brand-600 focus:ring-4 focus:ring-brand-100'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      service: form.service,
      message: form.message.trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error')
      setError('Please fill in your name, email and project details.')
      return
    }

    const send = async () => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }
      return data
    }

    try {
      try {
        await send()
      } catch (firstErr) {
        // One retry helps when the API briefly restarts during local --watch.
        await new Promise((r) => setTimeout(r, 600))
        await send()
      }
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      const msg = err?.message || ''
      if (
        msg.includes('Failed to fetch') ||
        msg.includes('NetworkError') ||
        msg.includes('ECONNRESET') ||
        msg.includes('Load failed')
      ) {
        setError('Could not reach the server. Make sure the API is running, then try again.')
      } else {
        setError(msg || 'Something went wrong. Please try again.')
      }
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
        title="Contact Shansofts | Free Software Project Quote"
        description="Contact Shansofts for a free consultation on custom software, web apps, mobile apps, cloud or AI. We respond within one business day."
        path="/contact"
        keywords="contact software development company, free software quote, hire developers"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Shansofts',
          url: 'https://www.shansofts.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: site.name,
            email: site.email,
            telephone: site.phone,
          },
        }}
      />

      <section className="relative py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Contact us"
            title="Let's talk about your project"
            subtitle="Tell us what you're building — custom software, SaaS, mobile or AI — and we'll get back within one business day with clear next steps."
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
                    <Icon size={24} className="shrink-0 text-brand-600" strokeWidth={1.75} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-body">{c.label}</div>
                      <div className="text-sm font-semibold text-heading">{c.value}</div>
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

              <div className="card mt-auto bg-forest text-white">
                <h3 className="font-display font-semibold text-white">Why work with us?</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-brand-300" /> Free project consultation</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-brand-300" /> Transparent, fixed pricing</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-brand-300" /> Dedicated project manager</li>
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
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-heading">
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
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-heading">
                  Project details <span className="text-brand-600">*</span>
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-heading">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-heading outline-none transition placeholder:text-body focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  )
}
