import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/constants/education'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader eyebrow="Background" heading="Education" />
        </ScrollReveal>

        <div className="relative pl-6 border-l border-[var(--color-border)] max-w-xl">
          {EDUCATION.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-violet-500 bg-[var(--color-bg)]" />
              <p className="text-xs font-medium text-violet-500 mb-1">{item.period}</p>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">{item.degree}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.institution}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
