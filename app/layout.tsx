import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Propelr — AI Agency voor Premium Websites & AI Automations',
  description: 'Propelr bouwt premium websites en AI automations voor bedrijven die willen schalen. Gevestigd in Nederland, actief in NL & VS.',
  keywords: 'AI agency, website bouwen, AI automations, Next.js, premium websites Nederland',
  openGraph: {
    title: 'Propelr — AI Agency',
    description: 'Premium websites en AI automations die jouw bedrijf laten groeien.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-[#0A0A0A] text-white antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
