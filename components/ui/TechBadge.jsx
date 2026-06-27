import { cn } from '@/lib/utils'

/**
 * @param {{ label: string, variant?: 'primary'|'neutral' }} props
 */
export default function TechBadge({ label, variant = 'primary' }) {
  return (
    <span
      className={cn(
        'text-xs font-medium px-2 py-1 rounded font-mono',
        variant === 'primary'
          ? 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300'
          : 'bg-[var(--color-surface)] text-[var(--color-text-muted)]'
      )}
    >
      {label}
    </span>
  )
}
