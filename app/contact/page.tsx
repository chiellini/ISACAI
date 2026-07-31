'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  ContactSection,
  EntryPortalSection,
  FAQSection,
  Footer,
  Navigation,
  OfficeSection,
} from '@/app/portal'

export default function ContactPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <ContactSection />
          <OfficeSection />
          <EntryPortalSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
