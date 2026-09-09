import { site } from '@/lib/site'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './ui/SocialIcons'

const networks = [
  { name: 'Instagram', href: site.social.instagram, Icon: InstagramIcon },
  { name: 'Facebook', href: site.social.facebook, Icon: FacebookIcon },
  { name: 'TikTok', href: site.social.tiktok, Icon: TikTokIcon },
]

interface SocialLinksProps {
  className?: string
  itemClassName?: string
}

export function SocialLinks({ className = '', itemClassName = '' }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {networks.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} — ${name}`}
            className={`inline-flex size-10 items-center justify-center rounded-full transition-colors ${itemClassName}`}
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
