import { Phone, PhoneCall, Clock, MapPin, Languages, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { site, telHref, landlineHref, whatsappHref } from '@/lib/site'
import { ButtonLink } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  const iconBox = 'flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15'
  const label = 'text-xs font-semibold uppercase tracking-wide text-primary-foreground/70'

  return (
    <section id="contact" className="scroll-mt-20 pb-20 sm:pb-24">
      <div ref={ref} className="container-page reveal">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.14)_0%,_transparent_70%)]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit rounded-full bg-primary-foreground/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide">
                {t.contact.eyebrow}
              </span>
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">{t.contact.title}</h2>
              <p className="max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappHref(t.whatsappMessage)}
                  variant="whatsapp"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  {t.contact.ctaWhatsapp}
                </ButtonLink>
                <ButtonLink href={telHref} variant="inverted" size="lg">
                  <Phone className="size-5" aria-hidden="true" />
                  {t.contact.ctaCall}
                </ButtonLink>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <span className={label}>{t.contact.followLabel}</span>
                <SocialLinks itemClassName="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground hover:text-primary" />
              </div>
            </div>

            <dl className="flex flex-col gap-5 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
              <div className="flex gap-4">
                <span className={iconBox}>
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className={label}>
                    {t.contact.phoneLabel} · {t.contact.whatsappLabel}
                  </dt>
                  <dd>
                    <a href={telHref} dir="ltr" className="inline-block text-lg font-bold underline-offset-4 hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                  <dd className="text-sm text-primary-foreground/75">{t.contact.whatsappHint}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className={iconBox}>
                  <PhoneCall className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className={label}>{t.contact.landlineLabel}</dt>
                  <dd>
                    <a href={landlineHref} dir="ltr" className="inline-block text-base font-semibold underline-offset-4 hover:underline">
                      {site.landlineDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className={iconBox}>
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <dt className={label}>{t.contact.addressLabel}</dt>
                  <dd className="text-sm font-medium sm:text-base">{t.contact.addressValue}</dd>
                  <dd>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline"
                    >
                      {t.contact.mapsCta}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className={iconBox}>
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className={label}>{t.contact.hoursLabel}</dt>
                  <dd className="text-sm font-medium sm:text-base">{t.contact.hoursValue}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className={iconBox}>
                  <Languages className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className={label}>{t.contact.languagesLabel}</dt>
                  <dd className="text-sm font-medium sm:text-base">{t.contact.languagesValue}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
