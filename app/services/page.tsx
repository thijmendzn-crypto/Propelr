import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Diensten — Propelr',
  description: 'Premium websites en AI automations. Gebouwd voor resultaat, geleverd op tijd.',
}

const websiteFeatures = [
  'Op maat gemaakt design',
  'Razendsnelle performance (Lighthouse 95+)',
  'Mobiel-first en SEO-geoptimaliseerd',
  'CMS integratie mogelijk',
  'Conversie-geoptimaliseerde structuur',
]

const aiFeatures = [
  'Lead qualification en nurturing op autopilot',
  'AI klantenservice agents',
  'CRM integraties (HubSpot, Notion, etc.)',
  'E-mail flows en follow-up systemen',
  'Custom dashboards en rapportages',
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
              Onze diensten
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Onze Diensten</h1>
            <p className="text-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Gebouwd voor resultaat. Geleverd op tijd.
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
                Dienst 01
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Premium Websites</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Geen Squarespace-templates. Wij bouwen razendsnelle, op maat gemaakte websites die jouw bezoekers overtuigen en converteren.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {websiteFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div className="flex flex-wrap gap-3 mb-8">
                <PricingBadge text="Vanaf €1.499 eenmalig" />
                <PricingBadge text="of vanaf €97/maand" />
              </div>
              <Link href="/contact" className="btn-primary">
                Start jouw website
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
                Dienst 02
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI Automations</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Stop met repetitieve taken. Onze AI systemen werken 24/7 zodat jij je kunt focussen op wat echt telt — jouw klanten.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {aiFeatures.map((f) => <FeatureCheck key={f} text={f} />)}
              </ul>
              <div className="flex flex-wrap gap-3 mb-8">
                <PricingBadge text="Vanaf €499/maand" />
              </div>
              <Link href="/contact" className="btn-primary">
                Start met automatiseren
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
