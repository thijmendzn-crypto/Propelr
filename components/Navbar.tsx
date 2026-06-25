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

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 300ms ease',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#AAFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: '13px', flexShrink: 0 }}>P</span>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Propelr</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
                color: pathname === link.href ? '#AAFF00' : 'rgba(255,255,255,0.55)',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
          Book a call
        </Link>

        {/* Mobile hamburger — hidden on desktop via inline style hack */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-menu-btn"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ width: '20px', height: '2px', background: '#fff', display: 'block', transition: 'all 200ms ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, top: '72px', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: '1.8rem', fontWeight: 700, color: pathname === link.href ? '#AAFF00' : '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: '16px', fontSize: '1rem', padding: '14px 32px' }}>
            Book a call
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          nav { display: none !important; }
          header > div > a.btn-primary { display: none !important; }
        }
      `}</style>
    </header>
  )
}
