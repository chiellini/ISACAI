'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  CompanySection,
  ComplianceSection,
  FAQSection,
  Footer,
  Navigation,
  OfficeSection,
} from '@/app/portal'

export default function CompanyPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <CompanySection />
          <OfficeSection />
          <ComplianceSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
