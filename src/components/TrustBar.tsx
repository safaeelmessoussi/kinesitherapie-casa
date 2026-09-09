import { HeartHandshake, MapPinHouse, CalendarClock, MessageSquareHeart } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { useReveal } from '@/hooks/useReveal'

const icons = [HeartHandshake, MapPinHouse, CalendarClock, MessageSquareHeart]

export function TrustBar() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section aria-label="Engagements du cabinet" className="border-y border-border bg-muted">
      <div ref={ref} className="container-page reveal grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {t.trust.map((item, index) => {
          const Icon = icons[index]
          return (
            <div key={item.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-[0_8px_20px_-14px_rgba(15,37,64,0.5)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
