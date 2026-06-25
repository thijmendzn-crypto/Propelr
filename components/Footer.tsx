'use client'

import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Diensten' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded flex items-center justify-center text-black font-bold text-xs"
              style={{ background: '#AAFF00' }}
            >
              P
            </span>
            <span className="text-white font-semibold">Propelr</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Propelr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
