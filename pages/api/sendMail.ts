import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, name, subject } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT as unknown as number,
    secure: false,
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
    res.status(200).json({ message: 'Form successfully sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending the form' });
  }
  return Promise.resolve();
}
