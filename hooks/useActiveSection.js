'use client'

import { useState, useEffect } from 'react'

const SECTION_IDS = ['about', 'skills', 'projects', 'services', 'contact']

/**
 * Returns the id of the section currently most visible in viewport
 * @returns {string}
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observers = {}

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 }

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(callback, options)
      observer.observe(el)
      observers[id] = observer
    })

    return () => {
      Object.values(observers).forEach((obs) => obs.disconnect())
    }
  }, [])

  return activeId
}
