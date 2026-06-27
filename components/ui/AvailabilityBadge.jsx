/**
 * @param {{ available?: boolean }} props
 */
export default function AvailabilityBadge({ available = true }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800">
      <span
        className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-green-500 animate-pulse-dot' : 'bg-zinc-400'}`}
      />
      {available ? 'Available for work' : 'Currently unavailable'}
    </span>
  )
}
