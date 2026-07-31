'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  Footer,
  InfrastructureSection,
  Navigation,
  ProductSection,
  ComplianceSection,
  ContactSection,
} from '@/app/portal'

export default function PlatformPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <ProductSection />
          <InfrastructureSection />
          <ComplianceSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
