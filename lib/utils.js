import { clsx } from 'clsx'

/**
 * Merge Tailwind class names conditionally
 * @param {...(string|undefined|null|false)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return clsx(inputs)
}

/**
 * Smoothly scroll to a section by id
 * @param {string} id
 */
export function scrollToSection(id) {
  const el = document.getElementById(id.replace('#', ''))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
