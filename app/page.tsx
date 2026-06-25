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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 9l2 2 4-4" />
      </svg>
    ),
    title: 'AI Automations',
    body: 'From lead nurturing to customer service — we automate the repetitive work so you can focus on growth.',
    tags: ['AI Agents', 'Zapier / Make', 'Active 24/7'],
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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
  { end: '48h', label: 'Average first version delivery' },
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
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
        style={{ paddingTop: '80px' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)} className="inline-block mb-8">
            <span
              className="text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full"
              style={{ border: '1px solid rgba(170,255,0,0.4)', color: '#AAFF00', boxShadow: '0 0 16px rgba(170,255,0,0.1)' }}
            >
              AI-Powered Agency
            </span>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            We Build Websites and AI Systems That Actually{' '}
            <span style={{ color: '#AAFF00' }}>Grow Your Business.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Propelr builds premium websites and AI automations for businesses that want to scale — not just keep up.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/work" className="btn-primary text-sm font-semibold">
              View our work
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
              Book a free call
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Trusted by growing businesses in NL &amp; US
            </span>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What we build</h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Two products. One goal: grow your business.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div
                  className="glass-card p-8 h-full flex flex-col gap-5"
                  style={{
                    transition: 'all 200ms ease',
                    ...(card.featured ? { borderColor: 'rgba(170,255,0,0.25)', boxShadow: '0 0 40px rgba(170,255,0,0.06)' } : {}),
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px) scale(1.01)'
                    el.style.borderColor = card.featured ? 'rgba(170,255,0,0.5)' : 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'none'
                    el.style.borderColor = card.featured ? 'rgba(170,255,0,0.25)' : 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{card.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Results that speak</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <CountUp end={stat.end} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How it works</h2>
          </AnimatedSection>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px"
              style={{ borderTop: '1px dashed rgba(255,255,255,0.1)' }}
            />
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="flex flex-col gap-3">
                  <div className="relative">
                    <span className="text-8xl font-bold select-none leading-none" style={{ color: 'rgba(170,255,0,0.08)' }}>
                      {step.num}
                    </span>
                    <span className="absolute top-5 left-0 text-xs font-medium uppercase tracking-widest" style={{ color: '#AAFF00' }}>
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What our clients say</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
