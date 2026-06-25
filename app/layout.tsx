import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Propelr — AI Agency for Premium Websites & AI Automations',
  description: 'Propelr builds premium websites and AI automations for businesses that want to scale. Based in the Netherlands, active in NL & US.',
  keywords: 'AI agency, website design, AI automations, Next.js, premium websites',
  openGraph: {
    title: 'Propelr — AI Agency',
    description: 'Premium websites and AI automations that grow your business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
