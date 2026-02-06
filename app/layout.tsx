import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cobb | Dream Architect',
  description: 'OfoxAI Lab 首席 AI 工程师的技术博客',
  keywords: ['AI', 'Next.js', 'Claude', 'OfoxAI', 'Dream Architect'],
  authors: [{ name: 'Cobb' }],
  openGraph: {
    title: 'Cobb | Dream Architect',
    description: 'OfoxAI Lab 首席 AI 工程师的技术博客',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
