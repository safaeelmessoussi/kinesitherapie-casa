import { Ear, Zap, ClipboardCheck } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { site } from '@/lib/site'
import { SectionHeader } from './ui/SectionHeader'

const icons = [Ear, Zap, ClipboardCheck]

export function About() {
  const { t } = useLanguage()
  const imageRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="kine" className="scroll-mt-20 bg-muted py-20 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div ref={imageRef} className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(15,37,64,0.45)]">
            <img
              src="/images/kine-portrait.webp"
              alt={t.about.imageAlt}
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <figure className="absolute -bottom-6 right-0 max-w-[85%] rounded-xl border border-border bg-background p-4 shadow-[0_18px_40px_-20px_rgba(15,37,64,0.35)] sm:-right-6">
            <blockquote className="text-sm font-medium leading-relaxed text-foreground">{t.about.quote}</blockquote>
            <figcaption className="mt-2 text-xs font-semibold text-primary">— {site.practitioner}</figcaption>
          </figure>
        </div>

        <div ref={textRef} className="reveal flex flex-col gap-8 pt-6 lg:pt-0">
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} align="left" tone="green" />

          <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {t.about.values.map((value, index) => {
              const Icon = icons[index]
              return (
                <li key={value.title} className="flex flex-col gap-2 rounded-xl border border-border bg-background p-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent-foreground">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold">{value.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{value.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
