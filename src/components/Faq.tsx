import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import { SectionHeader } from './ui/SectionHeader'

export function Faq() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24">
      <div ref={ref} className="container-page reveal flex flex-col items-center gap-12">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <div className="flex w-full max-w-3xl flex-col gap-3">
          {t.faq.items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-xl border border-border bg-background open:border-primary/40 open:shadow-open"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-start font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
