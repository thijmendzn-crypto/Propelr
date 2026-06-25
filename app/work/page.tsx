'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'

const projects = [
  { title: 'VD Plumbing — Website Redesign', industry: 'Plumbing Services', result: '+40% conversions in 30 days', category: 'Websites', bg: 'linear-gradient(135deg, #0f1f10 0%, #1a2a1a 100%)' },
  { title: 'FreshBrands NL — AI Lead System', industry: 'Marketing & Branding', result: '10+ hours saved per week', category: 'AI Automations', bg: 'linear-gradient(135deg, #0f0f1f 0%, #1a1a2a 100%)' },
  { title: 'TechFlow B.V. — Full-Stack Platform', industry: 'SaaS / Tech', result: '3x more qualified leads', category: 'Websites', bg: 'linear-gradient(135deg, #0f1a1a 0%, #1a2020 100%)' },
  { title: 'GreenOps — Automation Suite', industry: 'Operations & Logistics', result: '60% less manual work', category: 'AI Automations', bg: 'linear-gradient(135deg, #1a0f0f 0%, #201a1a 100%)' },
  { title: 'Studio Voss — Portfolio + Booking', industry: 'Creative Agency', result: '+85% website traffic', category: 'Websites', bg: 'linear-gradient(135deg, #180f1a 0%, #1e1a1e 100%)' },
  { title: 'Maxflow CRM — AI Customer Service', industry: 'CRM / Sales', result: '24/7 customer support active', category: 'AI Automations', bg: 'linear-gradient(135deg, #0f1a0f 0%, #1a1e1a 100%)' },
]

const categories = ['All', 'Websites', 'AI Automations']

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <section className="grid-bg" style={{ background: '#0A0A0A', paddingTop: '160px', paddingBottom: '96px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(170,255,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-xl" style={{ position: 'relative' }}>
          <AnimatedSection>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAFF00', marginBottom: '16px' }}>Portfolio</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px' }}>Our Work</h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>Projects that deliver results</p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section-pad" style={{ background: '#0A0A0A' }}>
        <div className="container-xl">
          {/* Filter */}
          <AnimatedSection>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '48px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontSize: '0.85rem', fontWeight: 600, padding: '10px 20px', borderRadius: '100px',
                    cursor: 'pointer', transition: 'all 200ms ease', border: 'none', fontFamily: 'inherit',
                    background: active === cat ? '#AAFF00' : 'rgba(255,255,255,0.05)',
                    color: active === cat ? '#000' : 'rgba(255,255,255,0.6)',
                    outline: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div
                  className="glass-card"
                  style={{ overflow: 'hidden', transition: 'all 200ms ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'none'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ aspectRatio: '16/9', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#AAFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: '1rem', margin: '0 auto 8px' }}>P</div>
                      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>Propelr</span>
                    </div>
                    <span style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', background: 'rgba(170,255,0,0.15)', color: '#AAFF00', border: '1px solid rgba(170,255,0,0.2)' }}>
                      {project.category}
                    </span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>{project.industry}</p>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#AAFF00', marginBottom: '16px' }}>{project.result}</p>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>View case study →</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
