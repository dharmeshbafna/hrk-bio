import nodemailer from 'nodemailer';

// Vercel serverless function: sends the website inquiry form through the
// company's Zoho mailbox over SMTP. Configure in Vercel → Settings →
// Environment Variables:
//   ZOHO_USER       mailbox used to send, e.g. info@hrk.co.in
//   ZOHO_PASS       Zoho app-specific password for that mailbox
//   ZOHO_SMTP_HOST  optional, defaults to smtp.zoho.in (use smtp.zoho.com for a .com Zoho account)
//   CONTACT_TO      optional, comma-separated recipients, defaults to export@hrk.co.in

interface Req {
  method?: string;
  body?: unknown;
}
interface Res {
  status(code: number): Res;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

const LIMITS = { name: 200, email: 200, company: 200, country: 100, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req: Req, res: Res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const raw = (typeof req.body === 'string' ? safeParse(req.body) : req.body) as Record<string, unknown> | null;
  if (!raw) return res.status(400).json({ error: 'Invalid request' });

  // Honeypot: real visitors never see or fill this field
  if (typeof raw.website === 'string' && raw.website.trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  const data = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = typeof raw[key] === 'string' ? (raw[key] as string).trim() : '';
    if (!value || value.length > LIMITS[key]) {
      return res.status(400).json({ error: `Please check the ${key} field.` });
    }
    data[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass) {
    console.error('Contact form: ZOHO_USER / ZOHO_PASS not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  // Strip line breaks so header fields can't be injected
  const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ');
  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Country / Region', data.country],
  ];

  try {
    await transporter.sendMail({
      from: `"HRK Website" <${user}>`,
      to: process.env.CONTACT_TO || 'export@hrk.co.in',
      replyTo: `"${oneLine(data.name).replace(/"/g, '')}" <${oneLine(data.email)}>`,
      subject: oneLine(`Website Inquiry - ${data.company} (${data.country})`),
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${data.message}`,
      html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
        .join('')}</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(
        data.message,
      )}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form: sending failed', err);
    return res.status(502).json({ error: 'Could not send message' });
  }
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
