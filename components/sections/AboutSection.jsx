import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { slideInLeft, slideInRight } from '@/lib/animations'
import siteConfig from '@/config/site'

const STATS = [
  { num: '3+',  label: 'Years of experience'     },
  { num: '15+', label: 'Projects completed'       },
  { num: '10+', label: 'Technologies mastered'    },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          <ScrollReveal variant={slideInLeft}>
            <SectionHeader eyebrow="About me" heading={`Developer based in\n${siteConfig.location}`} />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              I'm <span className="font-medium text-[var(--color-text)]">Aklima</span>, a Full Stack
              Developer with <span className="font-medium text-[var(--color-text)]">3+ years</span> of
              experience building web applications using the MERN stack and Next.js. I specialize in
              creating scalable, performant products that look great and work even better.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-7">
              My goal is to help businesses and startups worldwide bring their ideas to life —
              delivering complete solutions from database design to responsive UI.
            </p>
            <Button
              variant="ghost"
              size="md"
              href="/aklima-cv.pdf"
              icon={<i className="ti ti-download text-sm" aria-hidden="true" />}
            >
              Download CV
            </Button>
          </ScrollReveal>

          <ScrollReveal variant={slideInRight}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-semibold text-violet-500 tracking-tight">{num}</div>
                  <div className="mt-1 text-xs text-[var(--color-text-muted)]">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
