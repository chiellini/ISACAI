'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  DemoSection,
  Footer,
  Navigation,
  OfferingsSection,
  UseCasesSection,
} from '@/app/page'

export default function SolutionsPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <UseCasesSection />
          <DemoSection />
          <OfferingsSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
