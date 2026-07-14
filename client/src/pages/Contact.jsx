import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const initialForm = { name: '', email: '', company: '', service: '', message: '' }

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

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
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
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((c) => {
                const Icon = c.icon
                const inner = (
                  <div className="card flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600/20 text-brand-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">{c.label}</div>
                      <div className="text-sm font-medium text-white">{c.value}</div>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a key={c.label} href={c.href} className="transition-transform hover:-translate-y-0.5">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                )
              })}

              <div className="card mt-auto">
                <h3 className="font-display font-semibold text-white">Why work with us?</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-400" /> Free project consultation</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-400" /> Transparent, fixed pricing</li>
                  <li className="flex items-center gap-2"><FiCheckCircle className="text-accent-400" /> Dedicated project manager</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
                  >
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
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Project details <span className="text-brand-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline and budget..."
                  className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <FiCheckCircle /> Thanks! Your message has been sent. We&apos;ll be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-brand-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
      />
    </div>
  )
}
