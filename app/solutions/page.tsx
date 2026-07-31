'use client'

import { LanguageProvider } from '@/components/LanguageProvider'
import {
  ContactSection,
  EntryPortalSection,
  Footer,
  Navigation,
  VLAClawSection,
} from '@/app/portal'

export default function SolutionsPage() {
  return (
    <LanguageProvider>
      <main>
        <Navigation />
        <div className="pt-16">
          <EntryPortalSection />
          <VLAClawSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
