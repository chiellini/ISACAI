import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISACAI VLAClaw | OpenClaw-Powered Embodied AI for ROS2 Robots',
  description:
    'VLAClaw is an OpenClaw-powered upper-computer platform that connects ROS2 robots through rosbridge, enabling voice interaction, visual perception, skill orchestration, and safe embodied AI execution.',
  keywords: [
    'ISACAI',
    'VLAClaw',
    'OpenClaw',
    'embodied AI',
    'ROS2 robot',
    'rosbridge',
    'robot dog',
    'Raspberry Pi 5',
    'skill server',
    'robot upper computer',
    'VLA robot',
    'VLM',
    'LLM',
    'quadruped robot',
    'robot skill orchestration',
    'cloud-edge AI',
  ],
  authors: [{ name: 'Hong Kong GettingRice Artificial Intelligence Limited' }],
  openGraph: {
    title: 'ISACAI VLAClaw | Skill-Orchestrated Embodied AI for ROS2 Robots',
    description:
      'An OpenClaw-powered upper-computer and skill orchestration platform for ROS2-enabled embodied robots.',
    type: 'website',
    siteName: 'ISACAI VLAClaw',
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
