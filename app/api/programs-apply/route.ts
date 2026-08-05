import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const gmailUser = process.env.ADMIN_GMAIL;
const gmailPass = process.env.ADMIN_GMAIL_PASSWORD;

export async function POST(request: Request) {
  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: 'Email configuration missing.' }, { status: 500 });
  }

  const data = await request.json();
  const { name, email, phone, program, motivation } = data;

  if (!name || !email || !phone || !program || !motivation) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass }
  });

  await transporter.sendMail({
    from: gmailUser,
    to: gmailUser,
    subject: `MissileX Program Application — ${program} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nSubmitted: ${new Date().toISOString()}\n\nMotivation:\n${motivation}`
  });

  return NextResponse.json({ status: 'success' });
}
