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
  title: "Ramachandra Udupa - Full Stack Developer & Machine Learning Engineer",
  description: "Full Stack Developer and Machine Learning Engineer specializing in AI applications, React, Python, and data-driven web solutions. Building intelligent systems that solve real-world problems.",
  metadataBase: new URL("https://ramachandra.tech"), 
  keywords: [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI Developer",
    "Python",
    "React",
    "Next.js",
    "TypeScript",
    "TensorFlow",
    "PyTorch",
    "Data Science",
    "Neural Networks",
    "Deep Learning",
    "API Development",
    "Web Development",
    "Artificial Intelligence",
    "Software Engineer"
  ],
  authors: [{ name: "Ramachandra Udupa" }],
  creator: "Ramachandra Udupa",
  publisher: "Ramachandra Udupa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramachandra.tech",
    title: "Ramachandra Udupa - Full Stack Developer & Machine Learning Engineer",
    description: "Full Stack Developer and Machine Learning Engineer building AI-powered applications with React, Python, and modern web technologies.",
    siteName: "Ramachandra Udupa Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ramachandra Udupa - Full Stack Developer & ML Engineer Portfolio"
      }
    ]
  },
  other: {
    "linkedin:card": "summary_large_image",
    "linkedin:title": "Ramachandra Udupa - Full Stack Developer & Machine Learning Engineer",
    "linkedin:description": "Full Stack Developer and Machine Learning Engineer building AI-powered applications with React, Python, and modern web technologies.",
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
