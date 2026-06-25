'use client'

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
    <form
      action="https://formspree.io/f/hello@propelr.io"
      method="POST"
      className="glass-card p-8 flex flex-col gap-5"
    >
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Naam
        </label>
        <input
          type="text"
          name="name"
          placeholder="Jan de Vries"
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
          placeholder="jan@bedrijf.nl"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Bedrijf
        </label>
        <input
          type="text"
          name="company"
          placeholder="Jouw Bedrijf B.V."
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Wat kan Propelr voor je doen?
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Vertel ons over jouw project of uitdaging..."
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <button type="submit" className="btn-primary w-full text-center text-sm">
        Verstuur
      </button>
    </form>
  )
}
