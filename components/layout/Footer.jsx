'use client'

import { NAV_LINKS } from '@/constants/navigation'
import siteConfig from '@/config/site'
import { scrollToSection } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center gap-4">
        <p className="text-xs text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </p>

        <nav className="flex gap-4 ml-auto" aria-label="Footer navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className="text-xs text-[var(--color-text-faint)] hover:text-[var(--color-text-muted)] transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex gap-2">
          {[
            { icon: 'ti-brand-github',   href: siteConfig.socials.github,   label: 'GitHub'   },
            { icon: 'ti-brand-linkedin', href: siteConfig.socials.linkedin, label: 'LinkedIn' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-7 h-7 rounded border border-[var(--color-border)] flex items-center justify-center text-xs text-[var(--color-text-faint)] hover:text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] transition-all duration-200"
            >
              <i className={`ti ${icon}`} aria-hidden="true" />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="w-7 h-7 rounded bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 flex items-center justify-center text-xs text-violet-600 dark:text-violet-400 hover:bg-violet-100 transition-all duration-200"
          >
            <i className="ti ti-arrow-up" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
