import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Saheli Mahapatra - Full Stack Developer",
  description: "Full Stack Developer specializing in MERN stack, .NET, and PostgreSQL. Passionate about building modern, scalable applications that make a difference.",
  keywords: ["Full Stack Developer", "React", "Node.js", "MongoDB", ".NET", "PostgreSQL", "TypeScript", "Next.js"],
  authors: [{ name: "Saheli Mahapatra" }],
  creator: "Saheli Mahapatra",
  publisher: "Saheli Mahapatra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saheli-dev.vercel.app/'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saheli Mahapatra - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, .NET, and PostgreSQL. Passionate about building modern, scalable applications that make a difference.",
    url: 'https://saheli-dev.vercel.app/',
    siteName: "Saheli Mahapatra Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saheli Mahapatra - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saheli Mahapatra - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, .NET, and PostgreSQL.",
    images: ['/og-image.png'], // can create this image later
    creator: '@notyoursaheli', 
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
  verification: {
    google: 'your-google-verification-code', // Add  Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className} min-h-screen bg-gradient-to-br from-background-light via-background to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-gray-900 dark:text-white transition-all duration-500 relative`}
      >
        {/* Animated background gradient */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),rgba(6,182,212,0.1))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.15),rgba(6,182,212,0.15))] pointer-events-none" />
        
        {/* Animated mesh gradient */}
        <div className="fixed inset-0 bg-[url('/mesh-gradient.svg')] bg-cover bg-center opacity-20 dark:opacity-30 mix-blend-soft-light pointer-events-none animate-gradient-xy" />
        
        {/* Content */}
        <div className="relative z-10">
          <ErrorBoundary>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
