import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stewarts Recreation - Boat, ATV & Snowmobile Repair | Burk\'s Falls, ON',
  description: 'Full-service marine repair, snowmobile maintenance, and ATV services in Burk\'s Falls, Ontario. 24-hour emergency towing available. Call (705) 382-3331',
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
