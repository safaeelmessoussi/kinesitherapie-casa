import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { SectionHeader } from './ui/SectionHeader'

export function Approach() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="deroulement" className="scroll-mt-20 py-20 sm:py-24">
      <div ref={ref} className="container-page reveal flex flex-col gap-12">
        <SectionHeader eyebrow={t.approach.eyebrow} title={t.approach.title} subtitle={t.approach.subtitle} />

        <ol className="grid gap-6 md:grid-cols-3">
          {t.approach.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary font-heading text-base font-bold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
