import { useLanguage } from '@/i18n/LanguageContext'
import { whatsappHref } from '@/lib/site'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function FloatingWhatsApp() {
  const { t } = useLanguage()

  return (
    <a
      href={whatsappHref(t.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floating}
      title={t.floating}
      className="fixed bottom-5 end-5 z-30 flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-whatsapp-float transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:end-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
