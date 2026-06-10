import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Headder";  
import PageTransition from "@/components/PageTransition";
import Staireffct from "@/components/Staireffct";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const themeColor = "#000000";

export const metadata: Metadata = {
  title: "Ramachandra Udupa - Software Developer & ML Engineer",
  description: "Portfolio of Ramachandra Udupa — Software Developer and Machine Learning Engineer specialised in AI, Data Science, and web development. Also interested in embedded systems and electronics.",
  metadataBase: new URL("https://ramachandra.tech"), 
  keywords: [
    "Software Developer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Science",
    "Python",
    "React",
    "Next.js",
    "PyTorch",
    "LangChain",
    "Django",
    "Embedded Systems",
    "Electronics",
    "Portfolio",
    "Ramachandra Udupa",
  ],
  authors: [{ name: "Ramachandra Udupa" }],
  creator: "Ramachandra Udupa",
  publisher: "Ramachandra Udupa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramachandra.tech",
    title: "Ramachandra Udupa - Software Developer & ML Engineer",
    description: "Portfolio of Ramachandra Udupa — Software Developer and Machine Learning Engineer.",
    siteName: "Ramachandra Udupa Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ramachandra Udupa Portfolio"
      }
    ]
  },
  other: {
    "linkedin:card": "summary_large_image",
    "linkedin:title": "Ramachandra Udupa - Software Developer & ML Engineer",
    "linkedin:description": "Portfolio of Ramachandra Udupa — Software Developer and Machine Learning Engineer.",
    "linkedin:image": "/opengraph-image.png",
    "linkedin:creator": "ramachandra-udupa"
  },
  category: "Technology",
  applicationName: "Ramachandra Udupa Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/manifest.json',
};

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
      <Header/>
      <Staireffct/>
      <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
