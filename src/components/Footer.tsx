import { useLanguage } from '@/i18n/LanguageContext'
import { site, telHref, landlineHref } from '@/lib/site'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { href: '#soins', label: t.nav.services },
    { href: '#kine', label: t.nav.about },
    { href: '#domicile', label: t.nav.home },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  const displayName = lang === 'ar' ? site.nameAr : site.name

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container-page flex flex-col gap-10 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
              <img src="/logo.png" alt="" width={44} height={44} loading="lazy" className="size-11 object-contain" />
              <span className="flex flex-col leading-tight">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.brand.line1}
                </span>
                <span className="font-heading text-lg font-extrabold tracking-tight text-primary">{t.brand.line2}</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <SocialLinks itemClassName="border border-border bg-background text-foreground hover:border-primary hover:text-primary" />
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.nav.contact}</span>
            <a href={telHref} dir="ltr" className="w-fit font-semibold text-foreground underline-offset-4 hover:underline">
              {site.phoneDisplay}
            </a>
            <a href={landlineHref} dir="ltr" className="w-fit text-muted-foreground underline-offset-4 hover:underline">
              {site.landlineDisplay}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pretty leading-relaxed text-muted-foreground underline-offset-4 hover:underline"
            >
              {t.contact.addressValue}
            </a>
          </div>

          <nav aria-label={t.nav.menu} className="flex flex-col gap-3 text-sm font-medium">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="w-fit text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {displayName}. {t.footer.rights}
          </p>
          <p className="max-w-md text-pretty md:text-end">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
