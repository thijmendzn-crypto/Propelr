import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services — Propelr',
  description: 'Premium websites and AI automations. Built for results, delivered on time.',
}

const websiteFeatures = [
  'Fully custom design',
  'Blazing-fast performance (Lighthouse 95+)',
  'Mobile-first and SEO-optimized',
  'CMS integration available',
  'Conversion-optimized structure',
]

const aiFeatures = [
  'Lead qualification and nurturing on autopilot',
  'AI customer service agents',
  'CRM integrations (HubSpot, Notion, etc.)',
  'Email flows and follow-up systems',
  'Custom dashboards and reporting',
]

function FeatureCheck({ text }: { text: string }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      <span style={{ marginTop: '2px', flexShrink: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(170,255,0,0.12)" />
          <path d="M8 12l3 3 5-5" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{text}</span>
    </li>
  )
}

function PricingBadge({ text }: { text: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '8px 16px', borderRadius: '100px',
      background: 'rgba(170,255,0,0.08)', border: '1px solid rgba(170,255,0,0.25)',
      color: '#AAFF00', fontSize: '0.85rem', fontWeight: 600,
    }}>
      {text}
    </span>
  )
}

function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '16/9', borderRadius: '20px',
      background: '#111111', border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '10px',
          background: '#AAFF00', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#000', fontWeight: 800, fontSize: '1.2rem', margin: '0 auto 12px',
        }}>P</div>
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>{label}</span>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid-bg" style={{ background: '#0A0A0A', paddingTop: '160px', paddingBottom: '96px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-xl" style={{ position: 'relative' }}>
          <AnimatedSection>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00', marginBottom: '16px' }}>Our services</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px' }}>Our Services</h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>Built for results. Delivered on time.</p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Block 1 — Websites */}
      <section className="section-pad" style={{ background: '#0A0A0A' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <AnimatedSection>
              <PlaceholderVisual label="Premium Website Preview" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00', marginBottom: '16px' }}>Service 01</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '20px' }}>Premium Websites</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
                No Squarespace templates. We build blazing-fast, fully custom websites that convince and convert your visitors.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {websiteFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <PricingBadge text="From €1,499 one-time" />
                <PricingBadge text="or from €97/month" />
              </div>
              <Link href="/contact" className="btn-primary">Start your website</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Block 2 — AI */}
      <section className="section-pad" style={{ background: '#0d0d0d' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <AnimatedSection delay={0.1} style={{ order: 1 }}>
              <PlaceholderVisual label="AI Automation Dashboard" />
            </AnimatedSection>
            <AnimatedSection style={{ order: 0 }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00', marginBottom: '16px' }}>Service 02</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '20px' }}>AI Automations</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
                Stop doing repetitive tasks. Our AI systems work 24/7 so you can focus on what really matters — your clients.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {aiFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <PricingBadge text="From €499/month" />
              </div>
              <Link href="/contact" className="btn-primary">Start automating</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
