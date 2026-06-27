'use client'

import { motion } from 'motion/react'
import SectionHeader from '@/components/ui/SectionHeader'
import SkillCard from '@/components/ui/SkillCard'
import { SKILL_GROUPS } from '@/constants/skills'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <SectionHeader eyebrow="Tech stack" heading="Skills & technologies" />
        </motion.div>

        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.label} className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
              {group.label}
            </p>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
              variants={staggerContainer(0.06, gi * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {group.skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeUp}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
