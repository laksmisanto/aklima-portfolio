'use client'

/**
 * @param {{ icon: string, title: string, description: string }} props
 */
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="group flex flex-col p-6 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] hover:border-violet-500 transition-all duration-200 hover:-translate-y-1 cursor-default">
      <div className="w-10 h-10 rounded-lg bg-violet-50 dark:bg-violet-950 flex items-center justify-center mb-4 group-hover:bg-violet-100 dark:group-hover:bg-violet-900 transition-colors duration-200">
        <i className={`ti ${icon} text-lg text-violet-600 dark:text-violet-400`} aria-hidden="true" />
      </div>
      <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2 capitalize">{title}</h3>
      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{description}</p>
    </div>
  )
}
