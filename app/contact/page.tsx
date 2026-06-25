import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact — Propelr',
  description: 'Book a free strategy call with Propelr. No obligations, response within 24h.',
}

const benefits = [
  'Free strategy call (30 min)',
  'No obligations',
  'Response within 24h',
]

export default function ContactPage() {
  return (
    <section className="grid-bg" style={{ minHeight: '100vh', background: '#0A0A0A', paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00', marginBottom: '16px' }}>Contact</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>Let&apos;s talk</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>Book a free call and discover what Propelr can do for you.</p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Left */}
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>Book a free call</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {benefits.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(170,255,0,0.12)" />
                      <path d="M8 12l3 3 5-5" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>Reach us directly at</p>
              <a href="mailto:hello@propelr.io" style={{ fontSize: '1rem', fontWeight: 700, color: '#AAFF00', textDecoration: 'none' }}>
                hello@propelr.io
              </a>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
