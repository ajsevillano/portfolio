import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Simple in-memory, per-IP rate limiter. Good enough for a portfolio on a
// single serverless instance; for durable limits across instances use Upstash.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (hits.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, hits);
    return true;
  }

  hits.push(now);
  rateLimitStore.set(ip, hits);
  return false;
}

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded)) {
    return forwarded[0];
  }
  return req.socket.remoteAddress ?? 'unknown';
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(name: unknown, email: unknown, subject: unknown) {
  return (
    typeof name === 'string' &&
    name.trim().length > 0 &&
    name.length <= 100 &&
    typeof email === 'string' &&
    EMAIL_REGEX.test(email) &&
    email.length <= 254 &&
    typeof subject === 'string' &&
    subject.trim().length > 0 &&
    subject.length <= 2000
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ message: 'Too many requests' });
  }

  const { email, name, subject, website } = req.body;

  // Honeypot: a hidden field real users never fill in. If it has a value the
  // submission is almost certainly a bot, so we silently accept and drop it.
  if (website) {
    return res.status(200).json({ message: 'Form successfully sent' });
  }

  if (!isValidPayload(name, email, subject)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const port = Number(process.env.MAIL_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port,
    secure: port === 465, // SSL on 465, STARTTLS on 587
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_USER,
    subject: 'New message from contact form at ajsevillano.com',
    text: `Email: ${email}\nNombre: ${name}\nSubject: ${subject}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Form successfully sent' });
  } catch (error) {
    // Log internally, never leak the error details to the client.
    // eslint-disable-next-line no-console
    console.error('sendMail error:', error);
    return res.status(500).json({ message: 'Error sending the form' });
  }
}
