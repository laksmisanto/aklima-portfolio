import { cn } from '@/lib/utils'

/**
 * @param {{ eyebrow?: string, heading: string, description?: string, align?: 'left'|'center', className?: string }} props
 */
export default function SectionHeader({ eyebrow, heading, description, align = 'left', className }) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-widest uppercase text-violet-500 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] whitespace-pre-line">
        {heading}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-[var(--color-text-muted)] max-w-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
