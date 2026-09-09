import { useEffect, useState } from 'react'
import { Menu, X, Phone, Languages } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { site, telHref, whatsappHref } from '@/lib/site'
import { ButtonLink } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function Header() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '#soins', label: t.nav.services },
    { href: '#kine', label: t.nav.about },
    { href: '#deroulement', label: t.nav.approach },
    { href: '#domicile', label: t.nav.home },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  const otherLang = lang === 'fr' ? 'EN' : 'FR'

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-border/80 bg-background/85 shadow-[0_8px_30px_-20px_rgba(15,37,64,0.35)] backdrop-blur-md' : 'bg-background'
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <svg viewBox="0 0 64 64" className="size-6" aria-hidden="true">
              <path d="M22 18v28M42 18v28M22 32h20" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" />
              <circle cx="48" cy="18" r="6" fill="#5fc19a" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-bold tracking-tight whitespace-nowrap sm:text-base">{site.name}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">{site.practitioner}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.switchTo}
            title={t.nav.switchTo}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Languages className="size-4" aria-hidden="true" />
            {otherLang}
          </button>
          <ButtonLink href={whatsappHref(t.whatsappMessage)} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-4" />
            {t.nav.cta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.switchTo}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-semibold"
          >
            <Languages className="size-4" aria-hidden="true" />
            {otherLang}
          </button>
          <a
            href={telHref}
            aria-label={t.hero.ctaCall}
            className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-4.5rem)] flex-col border-t border-border bg-background lg:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-6" aria-label="Navigation mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="container-page mt-auto flex flex-col gap-3 pb-8">
            <ButtonLink
              href={whatsappHref(t.whatsappMessage)}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="size-5" />
              {t.hero.ctaWhatsapp}
            </ButtonLink>
            <ButtonLink href={telHref} variant="outline" size="lg" onClick={() => setOpen(false)}>
              <Phone className="size-5" aria-hidden="true" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
