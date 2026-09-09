import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Languages } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { languages } from '@/i18n/translations'

export function LanguageSwitcher() {
  const { lang, t, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = languages.find((option) => option.code === lang) ?? languages[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${current.label}`}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Languages className="size-4" aria-hidden="true" />
        <span className="min-w-5 text-center">{current.short}</span>
        <ChevronDown
          className={`size-3.5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t.nav.language}
          className="absolute end-0 top-full z-50 mt-2 flex min-w-44 flex-col gap-0.5 rounded-xl border border-border bg-background p-1.5 shadow-float"
        >
          {languages.map((option) => {
            const active = option.code === lang
            return (
              <button
                key={option.code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                lang={option.code}
                dir={option.dir}
                onClick={() => {
                  setLang(option.code)
                  setOpen(false)
                }}
                className={`flex items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-primary-soft text-primary' : 'text-foreground hover:bg-muted'
                }`}
              >
                <span>{option.label}</span>
                {active ? <Check className="size-4" aria-hidden="true" /> : <span className="size-4" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
