import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Logo from './Logo'
import { navLinks, site } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-800/50">
      <div className="container-app grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Shansofts is an IT solutions company building custom software, web and mobile apps that help
            businesses grow.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.linkedin} aria-label="LinkedIn" className="social-btn"><FiLinkedin /></a>
            <a href={site.social.twitter} aria-label="Twitter" className="social-btn"><FiTwitter /></a>
            <a href={site.social.github} aria-label="GitHub" className="social-btn"><FiGithub /></a>
            <a href={site.social.facebook} aria-label="Facebook" className="social-btn"><FiFacebook /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-slate-400 transition-colors hover:text-brand-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-sm text-slate-400 transition-colors hover:text-brand-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-300">{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-brand-400" />
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-300">{site.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-400" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with the MERN stack &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
