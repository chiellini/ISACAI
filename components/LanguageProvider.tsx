'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Language, getTranslation, translations } from '@/lib/i18n'

type TranslationType = typeof translations.en

interface LanguageContextType {
  language: Language
  t: TranslationType
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => {
      const next = current === 'en' ? 'zh' : 'en'
      localStorage.setItem('language', next)
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ language, t: getTranslation(language), toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
