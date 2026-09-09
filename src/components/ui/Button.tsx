import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'whatsapp' | 'outline' | 'ghost' | 'inverted'
type Size = 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground shadow-primary hover:bg-primary-hover hover:shadow-primary-hover',
  whatsapp: 'bg-whatsapp text-primary-foreground shadow-whatsapp hover:brightness-95 hover:shadow-whatsapp-hover',
  outline: 'border border-border bg-background text-foreground hover:border-primary hover:text-primary',
  ghost: 'text-foreground hover:bg-muted',
  inverted: 'bg-primary-foreground text-primary hover:bg-primary-foreground/90',
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
