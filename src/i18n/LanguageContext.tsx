import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { languages, translations, type Lang, type Translation } from './translations'

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Translation
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'kinesitherapie-casa:lang'
const DEFAULT_LANG: Lang = 'fr'

function isLang(value: string | null): value is Lang {
  return languages.some((option) => option.code === value)
}

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLang(stored) ? stored : DEFAULT_LANG
}

function dirFor(lang: Lang): 'ltr' | 'rtl' {
  return languages.find((option) => option.code === lang)?.dir ?? 'ltr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dirFor(lang)
    document.title = translations[lang].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translations[lang].meta.description)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir: dirFor(lang), t: translations[lang], setLang }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
