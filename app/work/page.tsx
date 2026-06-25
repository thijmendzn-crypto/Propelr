'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

const projects = [
  {
    title: 'VD Loodgieters — Website Redesign',
    industry: 'Loodgietersbedrijf',
    result: '+40% conversies in 30 dagen',
    category: 'Websites',
    color: '#1a2a1a',
  },
  {
    title: 'FreshBrands NL — AI Lead System',
    industry: 'Marketing & Branding',
    result: '10+ uur bespaard per week',
    category: 'AI Automations',
    color: '#1a1a2a',
  },
  {
    title: 'TechFlow B.V. — Full-Stack Platform',
    industry: 'SaaS / Tech',
    result: '3x meer qualified leads',
    category: 'Websites',
    color: '#1a2020',
  },
  {
    title: 'GreenOps — Automation Suite',
    industry: 'Operations & Logistics',
    result: '60% minder handmatig werk',
    category: 'AI Automations',
    color: '#201a1a',
  },
  {
    title: 'Studio Voss — Portfolio + Booking',
    industry: 'Creative Agency',
    result: '+85% website-traffic',
    category: 'Websites',
    color: '#1e1a1e',
  },
  {
    title: 'Maxflow CRM — AI Klantenservice',
    industry: 'CRM / Sales',
    result: '24/7 klantondersteuning actief',
    category: 'AI Automations',
    color: '#1a1e1a',
  },
]

const categories = ['Alles', 'Websites', 'AI Automations']

export default function WorkPage() {
  const [active, setActive] = useState('Alles')

  const filtered = active === 'Alles' ? projects : projects.filter((p) => p.category === active)

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
              Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Ons Werk</h1>
            <p className="text-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Projecten die resultaten leveren
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-16 md:py-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <AnimatedSection className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
                style={{
                  background: active === cat ? '#AAFF00' : 'rgba(255,255,255,0.04)',
                  color: active === cat ? '#000' : 'rgba(255,255,255,0.6)',
                  border: active === cat ? '1px solid #AAFF00' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div
                  className="glass-card overflow-hidden group cursor-pointer"
                  style={{ transition: 'all 200ms ease' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-4px) scale(1.01)'
                    el.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'none'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  {/* Image placeholder */}
                  <div
                    className="w-full aspect-video flex items-center justify-center relative"
                    style={{ background: project.color }}
                  >
                    <div className="text-center">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center text-black font-bold text-lg mx-auto mb-2"
                        style={{ background: '#AAFF00' }}
                      >
                        P
                      </div>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Propelr</span>
                    </div>
                    <span
                      className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(170,255,0,0.15)', color: '#AAFF00', border: '1px solid rgba(170,255,0,0.2)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.industry}</p>
                    <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                    <p className="text-sm font-medium mb-4" style={{ color: '#AAFF00' }}>{project.result}</p>
                    <span
                      className="text-sm font-medium inline-flex items-center gap-1.5 transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Bekijk case study
                      <span>→</span>
                    </span>
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
