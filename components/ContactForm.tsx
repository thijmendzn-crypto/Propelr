'use client'

const CALENDLY_URL = 'https://calendly.com/propelr/30min'

export default function ContactForm() {
  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 200ms ease',
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(170,255,0,0.4)'
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Calendly CTA */}
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center text-base py-4 flex items-center justify-center gap-2"
        style={{ fontSize: '1rem', padding: '16px 28px' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Book a free 30-min call
      </a>

      <div className="flex items-center gap-4">
        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }} />
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>or send a message</span>
        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }} />
      </div>

      <form
        action="https://formspree.io/f/hello@propelr.io"
        method="POST"
        className="glass-card p-8 flex flex-col gap-5"
      >
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Smith"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your Company Inc."
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            How can Propelr help you?
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project or challenge..."
            style={{ ...inputStyle, resize: 'none' }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center text-sm">
          Send message
        </button>
      </form>
    </div>
  )
}
