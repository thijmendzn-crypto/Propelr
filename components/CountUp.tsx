'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  end: string
  label: string
}

export default function CountUp({ end, label }: Props) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl md:text-6xl font-bold mb-2 tracking-tight transition-all duration-700"
        style={{ color: inView ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
      >
        <span style={{ color: '#AAFF00' }}>{end}</span>
      </div>
      <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </p>
    </div>
  )
}
