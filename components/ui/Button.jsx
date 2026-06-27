'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * @param {{ variant?: 'primary'|'secondary'|'ghost', size?: 'sm'|'md'|'lg', href?: string, icon?: import('react').ReactNode, loading?: boolean, className?: string, children: import('react').ReactNode }} props
 */
export default function Button({
  variant = 'secondary',
  size = 'md',
  href,
  icon,
  loading = false,
  className,
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:   'bg-violet-500 text-white hover:bg-violet-600 active:scale-[0.98]',
    secondary: 'bg-transparent text-[var(--color-text)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] active:scale-[0.98]',
    ghost:     'bg-transparent text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {loading ? (
        <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : icon}
      {children}
    </>
  )

  if (href) {
    return <Link href={href} className={classes} {...rest}>{content}</Link>
  }

  return (
    <button className={classes} disabled={loading} {...rest}>
      {content}
    </button>
  )
}
