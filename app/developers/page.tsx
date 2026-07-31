'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  DeveloperSection,
  FAQSection,
  Footer,
  InfrastructureSection,
  Navigation,
  ProductSection,
} from '@/app/portal'

export default function DevelopersPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <ProductSection />
          <InfrastructureSection />
          <DeveloperSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
