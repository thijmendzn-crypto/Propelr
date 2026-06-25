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
    <section
      className="min-h-screen pt-40 pb-24 relative overflow-hidden grid-bg"
      style={{ background: '#0A0A0A' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.05) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#AAFF00' }}>
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Let&apos;s talk</h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Book a free call and discover what Propelr can do for you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <AnimatedSection className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book a free call</h2>
              <ul className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="rgba(170,255,0,0.12)" />
                        <path d="M8 12l3 3 5-5" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Reach us directly at</p>
              <a href="mailto:hello@propelr.io" className="text-lg font-semibold" style={{ color: '#AAFF00' }}>
                hello@propelr.io
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Form + Calendly */}
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
