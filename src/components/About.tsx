import { Ear, Zap, ClipboardCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { SectionHeader } from './ui/SectionHeader'

const icons = [Ear, Zap, ClipboardCheck]

export function About() {
  const { t } = useLanguage()
  const introRef = useReveal<HTMLDivElement>()
  const valuesRef = useReveal<HTMLUListElement>()

  return (
    <section id="kine" className="scroll-mt-20 bg-muted py-20 sm:py-24">
      <div className="container-page flex flex-col gap-12 lg:gap-14">
        <div ref={introRef} className="reveal grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} align="start" tone="accent" />
            <img
              src="/logo.png"
              alt=""
              width={96}
              height={96}
              loading="lazy"
              className="hidden size-24 object-contain opacity-90 lg:block"
            />
          </div>

          <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-muted-foreground lg:pt-2">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul ref={valuesRef} className="reveal grid gap-4 sm:grid-cols-3">
          {t.about.values.map((value, index) => {
            const Icon = icons[index]
            return (
              <li
                key={value.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-icon"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
