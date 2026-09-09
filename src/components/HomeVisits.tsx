import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { whatsappHref } from '@/lib/site'
import { SectionHeader } from './ui/SectionHeader'
import { ButtonLink } from './ui/Button'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function HomeVisits() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  const homeMessage =
    lang === 'fr'
      ? 'Bonjour, je souhaite réserver une séance de kinésithérapie à domicile à Casablanca.'
      : 'Hello, I would like to book a home physiotherapy session in Casablanca.'

  return (
    <section id="domicile" className="scroll-mt-20 bg-accent-soft py-20 sm:py-24">
      <div ref={ref} className="container-page reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(12,59,42,0.45)] lg:order-1">
          <img
            src="/images/reeducation-sport.webp"
            alt={t.home.imageAlt}
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeader eyebrow={t.home.eyebrow} title={t.home.title} subtitle={t.home.subtitle} align="left" tone="green" />

          <ul className="flex flex-col gap-3">
            {t.home.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={whatsappHref(homeMessage)}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit"
          >
            <WhatsAppIcon className="size-5" />
            {t.home.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
