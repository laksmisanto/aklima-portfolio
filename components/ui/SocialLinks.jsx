import siteConfig from '@/config/site'

const SOCIALS = [
  { label: 'GitHub',   href: siteConfig.socials.github,   icon: 'ti-brand-github'   },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, icon: 'ti-brand-linkedin' },
  { label: 'Email',    href: `mailto:${siteConfig.email}`, icon: 'ti-mail'          },
]

/**
 * @param {{ size?: 'sm'|'md' }} props
 */
export default function SocialLinks({ size = 'md' }) {
  const dim = size === 'sm' ? 'w-8 h-8 text-sm' : 'w-9 h-9 text-base'

  return (
    <div className="flex gap-2">
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className={`${dim} rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-violet-500 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200`}
        >
          <i className={`ti ${icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
