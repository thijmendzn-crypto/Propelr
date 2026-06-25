'use client'

interface TestimonialProps {
  quote: string
  name: string
  company: string
}

export default function TestimonialCard({ quote, name, company }: TestimonialProps) {
  return (
    <div
      className="glass-card p-8 flex flex-col gap-5"
      style={{ transition: 'border-color 200ms ease, transform 200ms ease' }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
        ;(e.currentTarget as HTMLElement).style.transform = 'none'
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#AAFF00">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
        &ldquo;{quote}&rdquo;
      </p>

      <div>
        <p className="font-semibold text-white text-sm">{name}</p>
        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {company}
        </p>
      </div>
    </div>
  )
}
