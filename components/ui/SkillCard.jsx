'use client'

export default function SkillCard({ name, icon: Icon }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 hover:-translate-y-1 cursor-default group">
      <Icon
        size={24}
        className="text-[var(--color-text-muted)] group-hover:text-violet-500 transition-colors duration-200"
      />
      <span className="text-xs font-medium text-[var(--color-text-muted)] text-center leading-tight">
        {name}
      </span>
    </div>
  )
}
