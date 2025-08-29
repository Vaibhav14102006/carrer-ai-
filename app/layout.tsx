import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareerForge Pro - AI-Powered Career Development Platform',
  description: 'Transform your career with AI-powered assessments, personalized learning paths, and professional development tools.',
  keywords: 'career development, AI assessment, learning platform, professional growth, skill development',
  authors: [{ name: 'CareerForge Pro Team' }],
  creator: 'CareerForge Pro',
  publisher: 'CareerForge Pro',
  robots: 'index, follow',
  openGraph: {
    title: 'CareerForge Pro - AI-Powered Career Development Platform',
    description: 'Transform your career with AI-powered assessments, personalized learning paths, and professional development tools.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerForge Pro - AI-Powered Career Development Platform',
    description: 'Transform your career with AI-powered assessments, personalized learning paths, and professional development tools.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}