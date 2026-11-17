import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Logo from './Logo'
import { navLinks, site } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-0 bg-forest text-white/80">
      <div className="container-app grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {site.tagline}. Shansofts builds custom software, web and mobile products that help businesses move
            faster with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-brand-400 hover:text-white"
            >
              <FiLinkedin />
            </a>
            <a
              href={site.social.twitter}
              aria-label="Twitter"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-brand-400 hover:text-white"
            >
              <FiTwitter />
            </a>
            <a
              href={site.social.github}
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-brand-400 hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-brand-400 hover:text-white"
            >
              <FiFacebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/70 transition-colors hover:text-brand-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-sm text-white/70 transition-colors hover:text-brand-300">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="text-sm text-white/70 transition-colors hover:text-brand-300">
                Blog &amp; Insights
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-300">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-400" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
