import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { Mail } from 'lucide-react'
import siteConfig from '@/config/site'

const SOCIALS = [
  { label: 'GitHub',   href: siteConfig.socials.github,    icon: SiGithub   },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin,  icon: FaLinkedin },
  { label: 'Email',    href: `mailto:${siteConfig.email}`, icon: Mail       },
]

/**
 * @param {{ size?: 'sm'|'md' }} props
 */
export default function SocialLinks({ size = 'md' }) {
  const dim      = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'
  const iconSize = size === 'sm' ? 14 : 16

  return (
    <div className="flex gap-2">
      {SOCIALS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className={`${dim} rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-violet-500 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
