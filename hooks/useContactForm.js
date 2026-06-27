'use client'

import { useState } from 'react'

const INITIAL = { name: '', email: '', subject: '', message: '' }

/**
 * @returns {{ formData, handleChange, handleSubmit, status, errors }}
 */
export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL)
  const [errors, setErrors]     = useState({})
  const [status, setStatus]     = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim())    errs.name    = 'Name is required.'
    if (!formData.email.trim())   errs.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email.'
    if (!formData.subject.trim()) errs.subject = 'Subject is required.'
    if (!formData.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Send failed')
      setStatus('success')
      setFormData(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return { formData, handleChange, handleSubmit, status, errors }
}
