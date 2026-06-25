'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function CTABanner() {
  return (
    <section style={{ background: '#AAFF00' }}>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <AnimatedSection>
          <h2
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: '#000000' }}
          >
            Klaar om te groeien?
          </h2>
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(0,0,0,0.65)' }}
          >
            Plan een gratis strategiegesprek en ontdek wat Propelr voor jouw bedrijf kan doen.
          </p>
          <Link
            href="/contact"
            style={{
              background: '#000000',
              color: '#ffffff',
              fontWeight: 600,
              padding: '16px 36px',
              borderRadius: '8px',
              display: 'inline-block',
              fontSize: '1rem',
              transition: 'opacity 200ms ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Plan nu gratis gesprek
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
