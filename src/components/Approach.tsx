import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { SectionHeader } from './ui/SectionHeader'

export function Approach() {
  const { t } = useLanguage()
  const textRef = useReveal<HTMLDivElement>()
  const imageRef = useReveal<HTMLDivElement>()

  return (
    <section id="deroulement" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={textRef} className="reveal flex flex-col gap-10">
          <SectionHeader eyebrow={t.approach.eyebrow} title={t.approach.title} subtitle={t.approach.subtitle} align="left" />

          <ol className="flex flex-col">
            {t.approach.steps.map((step, index) => {
              const isLast = index === t.approach.steps.length - 1
              return (
                <li key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    {!isLast ? <span className="my-2 w-px flex-1 bg-border" aria-hidden="true" /> : null}
                  </div>
                  <div className={`flex flex-col gap-2 ${isLast ? '' : 'pb-8'}`}>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div ref={imageRef} className="reveal overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(15,37,64,0.45)]">
          <img
            src="/images/seance-manuelle.webp"
            alt={t.approach.imageAlt}
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
