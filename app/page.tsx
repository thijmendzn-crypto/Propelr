'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import CountUp from '@/components/CountUp'

const CALENDLY_URL = 'https://calendly.com/businessecomthijmen/30min'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

const serviceCards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Premium Websites',
    body: 'No templates. We build custom, blazing-fast websites that turn visitors into paying customers.',
    tags: ['Next.js', 'Conversion-optimized', 'SEO-ready'],
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M9 9l2 2 4-4" />
      </svg>
    ),
    title: 'AI Automations',
    body: 'From lead nurturing to customer service — we automate the repetitive work so you can focus on growth.',
    tags: ['AI Agents', 'Zapier / Make', 'Active 24/7'],
    featured: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: 'All-in-One',
    body: 'Website + AI systems combined. The complete digital infrastructure for businesses ready to scale.',
    tags: ['Most popular', 'Full-service'],
    featured: true,
  },
]

const steps = [
  { num: '01', title: 'Discovery', body: 'We get to know your business and determine the best approach.' },
  { num: '02', title: 'Build', body: 'Our team gets to work immediately. You stay in the loop.' },
  { num: '03', title: 'Launch', body: 'We launch, optimize, and stay available for you.' },
]

const stats = [
  { end: '12+', label: 'Projects delivered' },
  { end: '3x', label: 'Average client ROI' },
  { end: '48h', label: 'First version delivery' },
  { end: '100%', label: 'Client satisfaction' },
]

const testimonials = [
  {
    quote: 'Propelr completely transformed our website. Within a month we had 40% more enquiries.',
    name: 'Mark de Vries',
    company: 'Owner, VD Plumbing',
  },
  {
    quote: 'The AI automation they built saves us 10+ hours a week. Highly recommend.',
    name: 'Sarah Jansen',
    company: 'CEO, FreshBrands NL',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="grid-bg"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '100px',
          paddingBottom: '80px',
          background: '#0A0A0A',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'inline-block', marginBottom: '32px' }}>
            <span style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '8px 20px', borderRadius: '100px',
              border: '1px solid rgba(170,255,0,0.35)', color: '#AAFF00',
              boxShadow: '0 0 20px rgba(170,255,0,0.1)',
            }}>
              AI-Powered Agency
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}
          >
            We Build Websites and AI Systems That Actually{' '}
            <span style={{ color: '#AAFF00' }}>Grow Your Business.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}
          >
            Propelr builds premium websites and AI automations for businesses that want to scale — not just keep up.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link href="/work" className="btn-primary">View our work</Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">Book a free call</a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#AAFF00">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginLeft: '4px' }}>
              Trusted by growing businesses in NL &amp; US
            </span>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── SERVICES ── */}
      <section className="section-pad" style={{ background: '#0A0A0A' }}>
        <div className="container-xl">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              What we build
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>
              Two products. One goal: grow your business.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {serviceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div
                  className="glass-card"
                  style={{
                    padding: '32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    transition: 'all 200ms ease',
                    cursor: 'default',
                    ...(card.featured ? {
                      borderColor: 'rgba(170,255,0,0.3)',
                      boxShadow: '0 0 40px rgba(170,255,0,0.07), inset 0 0 0 1px rgba(170,255,0,0.1)',
                    } : {}),
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.borderColor = card.featured ? 'rgba(170,255,0,0.5)' : 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'none'
                    el.style.borderColor = card.featured ? 'rgba(170,255,0,0.3)' : 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>{card.title}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>{card.body}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {card.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '0.72rem', fontWeight: 600, padding: '4px 12px', borderRadius: '100px',
                        background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── STATS ── */}
      <section className="section-pad" style={{ background: '#0d0d0d' }}>
        <div className="container-xl">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Results that speak
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 24px' }}>
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <CountUp end={stat.end} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── PROCESS ── */}
      <section className="section-pad" style={{ background: '#0A0A0A' }}>
        <div className="container-xl">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              How it works
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <span style={{ fontSize: '5.5rem', fontWeight: 800, color: 'rgba(170,255,0,0.07)', lineHeight: 1, display: 'block', letterSpacing: '-0.04em' }}>
                      {step.num}
                    </span>
                    <span style={{ position: 'absolute', top: '18px', left: '2px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00' }}>
                      Step {step.num}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad" style={{ background: '#0d0d0d' }}>
        <div className="container-xl">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              What our clients say
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
