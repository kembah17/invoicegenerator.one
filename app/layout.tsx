import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// GSC verification loaded from env
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  ...(gscVerification && { verification: { google: gscVerification } }),
  metadataBase: new URL('https://www.invoicegenerator.one'),
  robots: { index: true, follow: true },
  title: {
    default: 'Free Invoice Generator Suite | invoicegenerator.one',
    template: '%s | invoicegenerator.one',
  },
  description: "Create professional invoices, receipts, and estimates for free. Download as PDF instantly — no signup, no watermarks. 100% client-side processing.",
  openGraph: {
    title: 'Free Invoice Generator Suite | invoicegenerator.one',
    description: 'Create professional invoices, receipts, and estimates for free. Download as PDF instantly.',
    url: 'https://www.invoicegenerator.one',
    siteName: 'invoicegenerator.one',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Invoice Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator Suite | invoicegenerator.one',
    description: 'Create professional invoices, receipts, and estimates for free. Download as PDF instantly.',
  },
  alternates: {
    canonical: 'https://www.invoicegenerator.one',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
