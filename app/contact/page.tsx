'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  ContactSection,
  FAQSection,
  Footer,
  Navigation,
  OfferingsSection,
} from '@/app/page'

export default function ContactPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <ContactSection />
          <OfferingsSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
