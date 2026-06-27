'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { PROJECTS, PROJECT_FILTERS } from '@/constants/projects'
import { fadeUp, staggerContainer, scaleIn, viewportConfig } from '@/lib/animations'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(
    () => activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  )

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <SectionHeader eyebrow="Featured work" heading="Projects" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {PROJECT_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                activeFilter === value
                  ? 'bg-violet-500 text-white border-violet-500'
                  : 'bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={scaleIn}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
