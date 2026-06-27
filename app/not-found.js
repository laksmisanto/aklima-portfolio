import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs font-medium tracking-widest uppercase text-violet-500 mb-3">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] mb-3">
        Page not found
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
      >
        Back to home
      </Link>
    </div>
  )
}
