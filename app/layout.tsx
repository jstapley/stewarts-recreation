import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Stewarts Recreation - Boat Storage, Marine Repair, ATV & Snowmobile Services | Burks Falls, ON',
  description: 'Professional boat storage, marine repair, snowmobile maintenance, and ATV services in Burks Falls, Ontario. Expert winterization, shrink wrapping, and full-service recreational vehicle repair. Call (705) 382-3331',
  keywords: 'boat storage Burks Falls, marine repair Ontario, snowmobile service, ATV repair, winterization, boat shrink wrap, pontoon storage, recreational vehicle repair, Burks Falls mechanic',
  authors: [{ name: 'Stewarts Recreation' }],
  openGraph: {
    title: 'Stewarts Recreation - Boat Storage & Marine Repair | Burks Falls, ON',
    description: 'Professional boat storage, marine repair, snowmobile maintenance, and ATV services. Expert care for all your recreational vehicles. Call (705) 382-3331',
    url: 'https://stewartsrecreation.com',
    siteName: 'Stewarts Recreation',
    images: [
      {
        url: 'https://stewartsrecreation.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stewarts Recreation - Boat Storage & Marine Repair',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stewarts Recreation - Boat Storage & Marine Repair',
    description: 'Professional boat storage, marine repair, snowmobile & ATV services in Burks Falls, ON',
    images: ['https://stewartsrecreation.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'ahrefs-site-verification': '445792aaad9f4f760971313d3f7e6311cdeebcb37967a315a61731d7fc76ba3c',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Stewarts Recreation',
              image: 'https://stewartsrecreation.com/og-image.jpg',
              '@id': 'https://stewartsrecreation.com',
              url: 'https://stewartsrecreation.com',
              telephone: '+17053823331',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '326 Ontario Street',
                addressLocality: 'Burks Falls',
                addressRegion: 'ON',
                postalCode: 'P0A 1C0',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.6225228,
                longitude: -79.3918049,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '17:00',
                },
              ],
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 45.6225228,
                  longitude: -79.3918049,
                },
                geoRadius: '50000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Recreational Vehicle Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Boat Storage',
                      description: 'Secure boat storage with winterization packages and shrink wrapping',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Marine Repair',
                      description: 'Full-service marine repair from tune-ups to engine replacements',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Snowmobile Services',
                      description: 'Engine repair, steering, tune-ups, and track studding',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'ATV Services',
                      description: 'Repairs and modifications including winch installation and suspension work',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        {/* Ahrefs Analytics */}
        <Script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="CyqyMMN/taxcReVf6figiw" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}