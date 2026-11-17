import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white transition-shadow duration-300 ${
        scrolled || open ? 'shadow-soft' : ''
      }`}
    >
      <nav className="container-app flex h-16 items-center justify-between md:h-20">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    isActive ? 'text-brand-600' : 'text-heading hover:text-brand-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary px-5">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-heading lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full border-b border-line bg-white lg:hidden"
          >
            <div className="container-app pb-6 pt-2">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-50 text-brand-700'
                            : 'text-heading hover:bg-brand-50 hover:text-brand-700'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
