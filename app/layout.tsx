import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISACAI | Company Portal',
  description:
    'ISACAI is a company portal for AI research, embodied intelligence projects, company information, and cooperation.',
  keywords: [
    'ISACAI',
    'embodied intelligence',
    'AI research',
    'robotics projects',
    'enterprise cooperation',
    'isacai.cn',
  ],
  authors: [
    { name: 'Hong Kong GettingRice Artificial Intelligence Limited' },
    { name: 'Guangzhou Multi-Agent Artificial Intelligence Technology Co., Ltd.' },
  ],
  icons: {
    icon: [{ url: '/公司icon.jpeg', type: 'image/jpeg' }],
    shortcut: '/公司icon.jpeg',
    apple: '/公司icon.jpeg',
  },
  openGraph: {
    title: 'ISACAI | Company Portal',
    description:
      'Company portal for ISACAI, its technology projects, company information, and cooperation routes.',
    type: 'website',
    siteName: 'ISACAI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
