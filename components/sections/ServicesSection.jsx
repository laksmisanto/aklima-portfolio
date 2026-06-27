'use client'

import { motion } from 'motion/react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/constants/services'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <SectionHeader
            eyebrow="What I do"
            heading="Services"
            description="End-to-end web development tailored to your business goals — not just code, but complete solutions."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
