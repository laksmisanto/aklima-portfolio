'use client'

import { motion } from 'motion/react'
import { fadeUp, viewportConfig } from '@/lib/animations'
import { cn } from '@/lib/utils'

/**
 * Wraps children in a scroll-triggered fade+slide animation
 * @param {{ children: import('react').ReactNode, className?: string, delay?: number, variant?: object }} props
 */
export default function ScrollReveal({ children, className, delay = 0, variant }) {
  const animation = variant || fadeUp

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
