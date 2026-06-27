import { SiGithub } from 'react-icons/si'
import { ExternalLink } from 'lucide-react'
import TechBadge from './TechBadge'
import Button from './Button'

/**
 * @param {{ title: string, description: string, image: string, techStack: string[], liveUrl: string, githubUrl: string, featured?: boolean, accentColor?: string }} props
 */
export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
  featured = false,
  accentColor = '#7C3AED',
}) {
  return (
    <div
      className={`group flex flex-col rounded-xl overflow-hidden bg-[var(--color-surface2)] border transition-all duration-200 hover:-translate-y-1 ${
        featured
          ? 'border-violet-300 dark:border-violet-700'
          : 'border-[var(--color-border)] hover:border-violet-300 dark:hover:border-violet-700'
      }`}
    >
      <div className="relative h-80 overflow-hidden bg-violet-50 dark:bg-violet-950 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-10" style={{ backgroundColor: accentColor }} />
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">{title}</h3>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {techStack.map((tech) => (
            <TechBadge
              key={tech}
              label={tech}
              variant={
                ['Next.js', 'React', 'MongoDB', 'Node.js'].includes(tech) ? 'primary' : 'neutral'
              }
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="primary" size="sm" href={liveUrl} icon={<ExternalLink size={12} />}>
            Live demo
          </Button>
          <Button variant="secondary" size="sm" href={githubUrl} icon={<SiGithub size={12} />}>
            GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
