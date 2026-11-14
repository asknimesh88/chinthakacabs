import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: {
    default: 'Chinthaka Cab Service | Private Driver & Car Rental in Sri Lanka',
    template: '%s | Chinthaka Cab Service',
  },
  description: 'Trusted private driver and cab service in Sri Lanka. Airport transfers, day tours, multi-day island tours, and car rental. 4.9-star Google rating. Book direct via WhatsApp.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Sri Lanka cab service',
    'private driver Sri Lanka',
    'Sri Lanka car rental',
    'airport transfer Colombo',
    'Sri Lanka tour driver',
    'Colombo airport pickup',
    'Sri Lanka day tours',
    'Kandy driver',
    'Sigiriya driver',
    'Galle tour',
    'Sri Lanka holiday driver',
    'Belihuloya cab',
    'Sri Lanka chauffeur service',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Chinthaka Cab Service | Private Driver & Car Rental in Sri Lanka',
    description: 'Trusted private driver and cab service in Sri Lanka. Airport transfers, day tours, multi-day island tours, and car rental. 4.9-star Google rating. Book direct via WhatsApp.',
    images: [
      {
        url: '/images/hero/lake-reservoir-group-1920w.jpg',
        width: 1920,
        height: 1080,
        alt: 'Chinthaka with travelers at a scenic reservoir in Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinthaka Cab Service | Private Driver & Car Rental in Sri Lanka',
    description: 'Trusted private driver and cab service in Sri Lanka. Airport transfers, day tours, multi-day tours, and car rental. Book direct via WhatsApp.',
    images: ['/images/hero/lake-reservoir-group-1920w.jpg'],
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
  other: {
    'geo.region': 'LK',
    'geo.placename': 'Belihuloya, Sri Lanka',
    'geo.position': '6.7149871;80.7833763',
    'ICBM': '6.7149871, 80.7833763',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/hero/lake-reservoir-group-1920w.jpg`,
    priceRange: '$$',
    currenciesAccepted: 'LKR, USD, EUR, GBP',
    paymentAccepted: 'Cash, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sabaragamuwa University of Sri Lanka',
      addressLocality: 'Belihuloya',
      addressRegion: 'Sabaragamuwa',
      postalCode: '70140',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.7149871,
      longitude: 80.7833763,
    },
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'City', name: 'Colombo' },
      { '@type': 'City', name: 'Kandy' },
      { '@type': 'City', name: 'Galle' },
      { '@type': 'City', name: 'Ella' },
      { '@type': 'City', name: 'Sigiriya' },
      { '@type': 'City', name: 'Nuwara Eliya' },
      { '@type': 'City', name: 'Negombo' },
      { '@type': 'City', name: 'Mirissa' },
      { '@type': 'City', name: 'Trincomalee' },
      { '@type': 'City', name: 'Anuradhapura' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Transport Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Airport Transfers', description: 'Pickup and drop-off at Colombo Bandaranaike International Airport' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Day Tours', description: 'Full-day guided tours to Sigiriya, Kandy, Galle, and more' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Multi-Day Tours', description: 'Custom 3 to 14-day tour itineraries across Sri Lanka' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Car Rental', description: 'Air-conditioned vehicles with or without driver' },
        },
      ],
    },
    sameAs: [
      siteConfig.social.google,
      siteConfig.social.googleProfile,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.googleRating,
      bestRating: 5,
      reviewCount: siteConfig.googleReviewCount,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '00:00',
        closes: '23:59',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
