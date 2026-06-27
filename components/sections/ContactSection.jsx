'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import SocialLinks from '@/components/ui/SocialLinks'
import { useContactForm } from '@/hooks/useContactForm'
import { fadeUp, slideInLeft, slideInRight, viewportConfig } from '@/lib/animations'
import siteConfig from '@/config/site'

const CONTACT_ITEMS = [
  { icon: Mail,    label: 'Email',    value: siteConfig.email    },
  { icon: Phone,   label: 'Phone',    value: siteConfig.phone    },
  { icon: MapPin,  label: 'Location', value: siteConfig.location },
]

export default function ContactSection() {
  const { formData, handleChange, handleSubmit, status, errors } = useContactForm()

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <SectionHeader eyebrow="Get in touch" heading="Let's build something together" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8">
              Have a project in mind or looking for a reliable developer to join your team? I'd love
              to hear from you. I typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-950 border border-violet-100 dark:border-violet-900 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-faint)]">{label}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <SocialLinks />
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { name: 'name',  type: 'text',  placeholder: 'Your name'        },
                  { name: 'email', type: 'email', placeholder: 'your@email.com'   },
                ].map(({ name, type, placeholder }) => (
                  <div key={name}>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full px-3 py-2.5 text-sm rounded-lg border bg-[var(--color-surface2)] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] outline-none transition-colors duration-200 focus:border-violet-500 ${
                        errors[name] ? 'border-red-400' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {errors[name] && (
                      <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-3 py-2.5 text-sm rounded-lg border bg-[var(--color-surface2)] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] outline-none transition-colors duration-200 focus:border-violet-500 ${
                    errors.subject ? 'border-red-400' : 'border-[var(--color-border)]'
                  }`}
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  rows={5}
                  className={`w-full px-3 py-2.5 text-sm rounded-lg border bg-[var(--color-surface2)] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] outline-none transition-colors duration-200 focus:border-violet-500 resize-y ${
                    errors.message ? 'border-red-400' : 'border-[var(--color-border)]'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {status === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 mb-3">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                variant="primary"
                size="md"
                loading={status === 'loading'}
                icon={<Send size={16} />}
                className="w-full justify-center"
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
