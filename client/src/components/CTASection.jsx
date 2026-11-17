import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="section pt-8">
      <div className="container-app">
        <Reveal scale>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-center text-white sm:px-12">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-balance text-white sm:text-4xl">
                Subscribe To Our Newsletter
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Product insights, delivery notes and practical IT ideas — no noise, just signal.
              </p>
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full min-w-0 flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/55 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40"
                />
                <button type="submit" className="btn-white shrink-0">
                  Subscribe
                </button>
              </form>
              {sent && <p className="mt-3 text-sm text-brand-200">Thanks — you&apos;re on the list.</p>}
              <div className="mt-8">
                <Link to="/contact" className="text-sm font-medium text-white underline-offset-4 hover:text-brand-300 hover:underline">
                  Or start a project conversation →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
