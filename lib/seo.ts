export const siteConfig = {
  name: "Holidaylandia",
  title: "Holidaylandia - Premium Travel & Tour Experiences in Turkey",
  description:
    "Discover unforgettable travel experiences with Holidaylandia. Expert tour planning, luxury accommodations, and personalized itineraries across Turkey's most beautiful destinations.",
  url: "https://holidaylandia.com",
  ogImage: "https://holidaylandia.com/og-image.jpg",
  keywords: [
    "Turkey tours",
    "travel agency Turkey",
    "Antalya tours",
    "Cappadocia tours",
    "Istanbul tours",
    "luxury travel Turkey",
    "tour packages",
    "holiday planning",
    "Turkish tourism",
    "travel experiences",
  ],
  company: {
    name: "HOLİDAYLANDİA TURİZM VE SANAYİ TİCARET LİMİTED ŞİRKETİ",
    address: "KIŞLA MAH. 51 SK. NO: 7 İÇ KAPI NO: 404 MURATPAŞA/ANTALYA",
    phone: "+1 (555) 123-4567",
    email: "contact@holidaylandia.com",
    taxOffice: "ANTALYA KURUMLAR",
    foundedDate: "2025-05-15",
  },
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
}: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}) {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const metaUrl = url || siteConfig.url

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type,
      locale: "tr_TR",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@holidaylandia",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressLocality: "Antalya",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.company.phone,
      email: siteConfig.company.email,
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    foundingDate: siteConfig.company.foundedDate,
    sameAs: [
      "https://facebook.com/holidaylandia",
      "https://instagram.com/holidaylandia",
      "https://twitter.com/holidaylandia",
    ],
  }
}

export function generateTourSchema(tour: {
  id: string
  title: string
  description: string
  price: number
  duration: string
  location: string
  image_url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    image: tour.image_url,
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    touristType: "Tourist",
    itinerary: {
      "@type": "ItemList",
      name: tour.title,
      description: tour.description,
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
  }
}
