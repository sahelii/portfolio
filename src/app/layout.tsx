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
  openGraph: {
    title: "Saheli Mahapatra - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, .NET, and PostgreSQL. Passionate about building modern, scalable applications that make a difference.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saheli Mahapatra - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, .NET, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className} min-h-screen bg-gradient-to-br from-background-light to-background-light dark:from-background-dark dark:to-background-dark text-gray-900 dark:text-white transition-all duration-500 relative`}
      >
       
        <div className="fixed inset-0 bg-gradient-radial from-primary/10 to-transparent dark:from-primary/15 dark:to-transparent pointer-events-none" />
        
        {/* Animated mesh gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-20 dark:opacity-30 mix-blend-soft-light pointer-events-none" />
        
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
