import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = generateSEOMetadata({})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="tr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
