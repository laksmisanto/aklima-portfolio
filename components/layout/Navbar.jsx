'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { NAV_LINKS } from '@/constants/navigation'
import { scrollToSection } from '@/lib/utils'
import siteConfig from '@/config/site'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const scrollY = useScrollPosition()
  const activeSection = useActiveSection()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrolled = scrollY > 20

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center" aria-label="Main navigation">
        <Link href="/" className="text-base font-semibold tracking-tight text-[var(--color-text)]">
          Akl<span className="text-violet-500">.</span>ima
        </Link>

        <ul className="hidden md:flex items-center gap-6 ml-auto mr-6 list-none">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={href}>
                <button
                  onClick={() => scrollToSection(href)}
                  className={`text-sm transition-colors duration-200 relative pb-0.5 ${
                    isActive
                      ? 'text-violet-500 font-medium'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-violet-500 rounded-full" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-strong)] transition-all duration-200"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Hire me
          </button>
        </div>

        <button
          className="md:hidden ml-auto w-9 h-9 flex items-center justify-center text-[var(--color-text-muted)]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'} text-xl`} aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] px-6 pb-4">
          <ul className="flex flex-col gap-1 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => {
                    scrollToSection(href)
                    setMenuOpen(false)
                  }}
                  className="w-full text-left text-sm text-[var(--color-text-muted)] hover:text-violet-500 py-2 transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              scrollToSection('#contact')
              setMenuOpen(false)
            }}
            className="w-full mt-3 bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200"
          >
            Hire me
          </button>
        </div>
      )}
    </header>
  )
}
