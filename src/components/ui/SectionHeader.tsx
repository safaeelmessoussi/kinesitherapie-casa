interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'blue' | 'green'
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', tone = 'blue' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const eyebrowTone =
    tone === 'blue' ? 'bg-primary-soft text-primary' : 'bg-accent-soft text-accent-foreground'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${eyebrowTone}`}>
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}
