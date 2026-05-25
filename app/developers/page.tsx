'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  DeveloperSection,
  FAQSection,
  Footer,
  Navigation,
  ResourcesSection,
  SkillsSection,
  WorkProofSection,
  WorkflowSection,
} from '@/app/page'

export default function DevelopersPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <WorkProofSection />
          <DeveloperSection />
          <SkillsSection />
          <WorkflowSection />
          <ResourcesSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
