import nodemailer from 'nodemailer'

let cachedTransporter

// True when SMTP credentials are configured via environment variables.
export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

function getTransporter() {
  if (cachedTransporter) return cachedTransporter
  if (!isMailConfigured()) return null

  const port = Number(process.env.SMTP_PORT) || 587
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return cachedTransporter
}

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// Sends the enquiry notification to the company inbox. Returns true if sent.
export async function sendContactEmail({ name, email, company, service, message }) {
  const transporter = getTransporter()
  if (!transporter) {
    console.warn('[mailer] SMTP not configured — skipping email. Set SMTP_* env vars to enable.')
    return false
  }

  const to = process.env.MAIL_TO || process.env.SMTP_USER
  const from = process.env.MAIL_FROM || `Shansofts Website <${process.env.SMTP_USER}>`

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
    ['Service', service || '—'],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#334155">${k}</td><td style="padding:6px 12px;color:#0f172a">${esc(v)}</td></tr>`
    )
    .join('')

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#1f40f5,#06b6d4);padding:20px 24px;color:#fff">
      <h2 style="margin:0;font-size:18px">New contact enquiry</h2>
      <p style="margin:4px 0 0;opacity:.9;font-size:13px">via shansofts.com contact form</p>
    </div>
    <div style="padding:20px 24px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      <div style="margin-top:16px">
        <div style="font-weight:600;color:#334155;font-size:13px;margin-bottom:6px">Message</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 14px;color:#0f172a;font-size:14px;white-space:pre-wrap">${esc(message)}</div>
      </div>
    </div>
  </div>`

  await transporter.sendMail({
    from,
    to,
    replyTo: email, // hitting "reply" replies to the enquirer
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ''}`,
    html,
    text: `New contact enquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`,
  })

  return true
}

// Verifies the SMTP connection/credentials (used at startup for a helpful log).
export async function verifyMailer() {
  const transporter = getTransporter()
  if (!transporter) return false
  await transporter.verify()
  return true
}
