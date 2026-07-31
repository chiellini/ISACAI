import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISACAI | Company Portal for ISACAPI',
  description:
    'ISACAI is the company portal for ISACAPI, an AI API gateway platform for API key distribution, quota management, billing, scheduling, and enterprise AI service operations.',
  keywords: [
    'ISACAI',
    'ISACAPI',
    'AI API gateway',
    'API key distribution',
    'subscription quota',
    'AI billing',
    'OpenAI compatible API',
    'Antigravity API',
    'model gateway',
    'enterprise AI infrastructure',
    'api.isacai.cn',
    'isacai.cn',
  ],
  authors: [
    { name: 'Hong Kong GettingRice Artificial Intelligence Limited' },
    { name: 'Guangzhou Multi-Agent Artificial Intelligence Technology Co., Ltd.' },
  ],
  openGraph: {
    title: 'ISACAI | Company Portal for ISACAPI',
    description:
      'Company portal for ISACAI and ISACAPI, the AI API gateway platform hosted at api.isacai.cn.',
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
