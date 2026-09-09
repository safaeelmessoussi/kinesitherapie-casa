import { useLanguage } from '@/i18n/LanguageContext'
import { site, telHref } from '@/lib/site'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { href: '#soins', label: t.nav.services },
    { href: '#kine', label: t.nav.about },
    { href: '#domicile', label: t.nav.home },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container-page flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="font-heading text-lg font-bold">{site.name}</span>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <a href={telHref} dir="ltr" className="w-fit text-sm font-semibold text-primary underline-offset-4 hover:underline">
              {site.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Liens du pied de page" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} — {site.practitioner}. {t.footer.rights}
          </p>
          <p className="max-w-md text-pretty md:text-end">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
