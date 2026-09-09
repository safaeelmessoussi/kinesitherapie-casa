import { Phone, Clock, MapPin, Languages } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { site, telHref, whatsappHref } from '@/lib/site'
import { ButtonLink } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function Contact() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  const details = [
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hoursValue },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.locationValue },
    { icon: Languages, label: t.contact.languagesLabel, value: t.contact.languagesValue },
  ]

  return (
    <section id="contact" className="scroll-mt-20 pb-20 sm:pb-24">
      <div ref={ref} className="container-page reveal">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.14)_0%,_transparent_70%)]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
                <ButtonLink
                  href={telHref}
                  size="lg"
                  className="bg-primary-foreground text-primary shadow-none hover:bg-primary-foreground/90"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {t.contact.ctaCall}
                </ButtonLink>
              </div>
            </div>

            <dl className="flex flex-col gap-5 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
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

              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">{label}</dt>
                    <dd className="text-sm font-medium sm:text-base">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
