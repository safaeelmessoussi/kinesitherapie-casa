import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'whatsapp' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(30,111,217,0.65)] hover:bg-primary-hover hover:shadow-[0_14px_34px_-12px_rgba(30,111,217,0.7)]',
  whatsapp:
    'bg-whatsapp text-white shadow-[0_10px_30px_-12px_rgba(37,211,102,0.7)] hover:brightness-95 hover:shadow-[0_14px_34px_-12px_rgba(37,211,102,0.75)]',
  outline: 'border border-border bg-background text-foreground hover:border-primary hover:text-primary',
  ghost: 'text-foreground hover:bg-muted',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
}

export function ButtonLink({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  )
}
