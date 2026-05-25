'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  FAQSection,
  Footer,
  Navigation,
  ResourcesSection,
  RoadmapSection,
  TeamSection,
  WorkProofSection,
} from '@/app/page'

export default function CompanyPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <TeamSection />
          <WorkProofSection />
          <RoadmapSection />
          <ResourcesSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
