import nodemailer from 'nodemailer'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * Send contact form email
 * @param {{ name: string, email: string, subject: string, message: string }} data
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const safeName    = escapeHtml(name)
  const safeEmail   = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  await transporter.sendMail({
    from: `"${safeName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `[Portfolio Contact] ${safeSubject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#7C3AED;">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#71717A;width:80px;">Name</td><td style="padding:8px 0;font-weight:500;">${safeName}</td></tr>
          <tr><td style="padding:8px 0;color:#71717A;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#7C3AED;">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px 0;color:#71717A;">Subject</td><td style="padding:8px 0;">${safeSubject}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#F3F0FF;border-radius:8px;">
          <p style="margin:0;line-height:1.7;color:#18181B;">${safeMessage}</p>
        </div>
      </div>
    `,
  })
}
