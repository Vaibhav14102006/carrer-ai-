import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareerAI - AI-Powered Career & Skill Advisor',
  description: 'Transform your career with AI-powered guidance, skill development, and personalized coaching.',
  keywords: 'career development, AI coaching, skill assessment, resume optimization, job search',
  authors: [{ name: 'CareerAI Team' }],
  openGraph: {
    title: 'CareerAI - AI-Powered Career & Skill Advisor',
    description: 'Transform your career with AI-powered guidance, skill development, and personalized coaching.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerAI - AI-Powered Career & Skill Advisor',
    description: 'Transform your career with AI-powered guidance, skill development, and personalized coaching.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
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
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}