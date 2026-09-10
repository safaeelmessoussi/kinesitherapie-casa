import { Phone, HousePlus, MessageCircleMore, MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { site, telHref, whatsappHref } from '@/lib/site'
import { ButtonLink } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] bg-[radial-gradient(ellipse_at_top,_var(--color-primary-soft)_0%,_transparent_60%)]"
      />
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="flex flex-col gap-7 animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>

          <h1 className="text-balance text-4xl font-extrabold sm:text-5xl lg:text-[3.5rem]">
            {t.hero.title} <span className="text-primary">{t.hero.highlight}</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{t.hero.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappHref(t.whatsappMessage)}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              {t.hero.ctaWhatsapp}
            </ButtonLink>
            <ButtonLink href={telHref} variant="outline" size="lg">
              <Phone className="size-5" aria-hidden="true" />
              {t.hero.ctaCall}
            </ButtonLink>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-foreground">
            <li className="flex items-center gap-2">
              <HousePlus className="size-4 text-primary" aria-hidden="true" />
              {t.hero.badgeHome}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircleMore className="size-4 text-primary" aria-hidden="true" />
              {t.hero.badgeReply}
            </li>
          </ul>
        </div>

        <div className="relative mb-16 animate-fade-up [animation-delay:150ms] sm:mb-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
            <img
              src="/images/bureau-centre.webp"
              srcSet="/images/bureau-centre-1000.webp 1000w, /images/bureau-centre.webp 1600w, /images/bureau-centre-2400.webp 2400w"
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt={t.hero.imageAlt}
              width={1600}
              height={1195}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute -bottom-14 start-4 flex items-center gap-3 rounded-xl border-2 border-primary/30 bg-background ps-3 pe-4 py-3 shadow-float transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-primary sm:-bottom-12 sm:start-8"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold">{t.contact.locationShort}</span>
              <span className="text-xs text-muted-foreground">{t.contact.hoursValue}</span>
              <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-primary underline decoration-primary/40 underline-offset-2 group-hover:decoration-primary">
                {t.contact.mapsCta}
                <ExternalLink className="size-3" aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
