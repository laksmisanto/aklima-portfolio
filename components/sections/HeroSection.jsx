'use client'

import { motion } from 'motion/react'
import { Briefcase, Send } from 'lucide-react'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'
import SocialLinks from '@/components/ui/SocialLinks'
import Button from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'
import siteConfig from '@/config/site'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full bg-violet-500 opacity-[0.07] blur-[100px] animate-drift-1 pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[40px] w-[350px] h-[350px] rounded-full bg-violet-300 opacity-[0.05] blur-[80px] animate-drift-2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          <motion.div
            className="flex-1 z-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <AvailabilityBadge available={siteConfig.available} />
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-[var(--color-text)]"
            >
              I build{' '}
              <span className="text-violet-500">fast, modern</span>
              <br />
              web applications
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed max-w-lg"
            >
              Full Stack Developer specializing in Next.js and the MERN stack. I turn ideas into
              production-ready products — from backend APIs to pixel-perfect UIs.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('#projects')}
                icon={<Briefcase size={16} />}
              >
                View my work
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection('#contact')}
                icon={<Send size={16} />}
              >
                Hire me
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-7">
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-violet-200 dark:border-violet-800 animate-spin-slow" />
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-violet-50 dark:bg-violet-950 border-[3px] border-violet-200 dark:border-violet-700 flex items-center justify-center text-4xl font-semibold text-violet-600 dark:text-violet-400 tracking-tight select-none">
                AK
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
