'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-black font-bold text-sm"
            style={{ background: '#AAFF00' }}
          >
            P
          </span>
          <span className="text-white font-semibold text-lg tracking-tight">Propelr</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: pathname === link.href ? '#AAFF00' : 'rgba(255,255,255,0.6)',
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) (e.target as HTMLElement).style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary text-sm">
            Book a call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="w-5 h-0.5 bg-white block transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="w-5 h-0.5 bg-white block transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-5 h-0.5 bg-white block transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold"
              style={{ color: pathname === link.href ? '#AAFF00' : '#ffffff' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4">
            Book a call
          </Link>
        </div>
      )}
    </header>
  )
}
