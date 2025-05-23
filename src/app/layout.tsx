import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

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
  title: "Saheli's Portfolio",
  description: "A portfolio for Saheli, a software developer with a passion for creating innovative and user-friendly applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className} min-h-screen bg-gradient-to-br from-background-light via-background to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-gray-900 dark:text-white transition-all duration-500 relative`}
      >
        {/* Animated background gradient */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),rgba(6,182,212,0.1))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.15),rgba(6,182,212,0.15))] pointer-events-none" />
        
        {/* Animated mesh gradient */}
        <div className="fixed inset-0 bg-[url('/mesh-gradient.svg')] bg-cover bg-center opacity-20 dark:opacity-30 mix-blend-soft-light pointer-events-none animate-gradient-xy" />
        
        {/* Content */}
        <div className="relative z-10">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
