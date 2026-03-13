import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stewarts Recreation - Boat, ATV & Snowmobile Repair | Burks Falls, ON',
  description: 'Full-service marine repair, snowmobile maintenance, and ATV services in Burk\'s Falls, Ontario. Professional boat storage and winterization. Call (705) 382-3331',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}