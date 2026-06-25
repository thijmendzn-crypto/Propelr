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
    <li className="flex items-start gap-3">
      <span className="mt-1 shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(170,255,0,0.12)" />
          <path d="M8 12l3 3 5-5" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>{text}</span>
    </li>
  )
}

function PricingBadge({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
      style={{ background: 'rgba(170,255,0,0.1)', border: '1px solid rgba(170,255,0,0.25)', color: '#AAFF00' }}
    >
      {text}
    </div>
  )
}

function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div
      className="w-full aspect-video rounded-2xl flex items-center justify-center"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="text-center">
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center text-black font-bold text-lg mx-auto mb-3"
          style={{ background: '#AAFF00' }}
        >
          P
        </div>
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>{label}</span>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 text-center relative overflow-hidden grid-bg"
        style={{ background: '#0A0A0A' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#AAFF00' }}>
              Our services
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Built for results. Delivered on time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Block 1 — Websites */}
      <section className="py-24 md:py-32" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <PlaceholderVisual label="Premium Website Preview" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#AAFF00' }}>
                Service 01
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Premium Websites</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                No Squarespace templates. We build blazing-fast, fully custom websites that convince and convert your visitors.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {websiteFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div className="flex flex-wrap gap-3 mb-8">
                <PricingBadge text="From €1,499 one-time" />
                <PricingBadge text="or from €97/month" />
              </div>
              <Link href="/contact" className="btn-primary">
                Start your website
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Block 2 — AI Automations */}
      <section className="py-24 md:py-32" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="lg:order-2">
              <PlaceholderVisual label="AI Automation Dashboard" />
            </AnimatedSection>
            <AnimatedSection className="lg:order-1">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#AAFF00' }}>
                Service 02
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI Automations</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Stop doing repetitive tasks. Our AI systems work 24/7 so you can focus on what really matters — your clients.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {aiFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div className="flex flex-wrap gap-3 mb-8">
                <PricingBadge text="From €499/month" />
              </div>
              <Link href="/contact" className="btn-primary">
                Start automating
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
