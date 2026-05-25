'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  ArchitectureSection,
  CompatibilitySection,
  Footer,
  Navigation,
  PhilosophySection,
  ProductInsightSection,
  ProductModulesSection,
  RoadmapSection,
  SolutionSection,
  ValidationSection,
  WorkflowSection,
} from '@/app/page'

export default function PlatformPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <ProductInsightSection />
          <ValidationSection />
          <SolutionSection />
          <WorkflowSection />
          <CompatibilitySection />
          <ArchitectureSection />
          <PhilosophySection />
          <ProductModulesSection />
          <RoadmapSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
