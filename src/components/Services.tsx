import { Bone, Dumbbell, Activity, Wind, Brain, PersonStanding } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { whatsappHref } from '@/lib/site'
import { SectionHeader } from './ui/SectionHeader'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

const icons = [Bone, Dumbbell, Activity, Wind, Brain, PersonStanding]

export function Services() {
  const { t } = useLanguage()
  const headerRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="soins" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page flex flex-col gap-12">
        <div ref={headerRef} className="reveal flex justify-center">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        </div>

        <div ref={gridRef} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </article>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {t.services.note}{' '}
          <a
            href={whatsappHref(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
