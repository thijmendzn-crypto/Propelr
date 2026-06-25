'use client'

import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '5px', background: '#AAFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: '11px' }}>P</span>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Propelr</span>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 200ms ease' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >{link.label}</Link>
            ))}
          </nav>

          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© 2025 Propelr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
