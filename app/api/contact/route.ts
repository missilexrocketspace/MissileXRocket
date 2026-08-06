import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const gmailUser = process.env.ADMIN_GMAIL;
const gmailPass = process.env.ADMIN_GMAIL_PASSWORD;

export async function POST(request: Request) {
  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: 'Email configuration missing.' }, { status: 500 });
  }

  const data = await request.json();
  const { name, email, phone, organization, researchInterest, message } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  });

  await transporter.sendMail({
    from: gmailUser,
    to: gmailUser,
    subject: `MissileX Contact Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization || 'N/A'}\nResearch Interest: ${researchInterest}\nMessage: ${message}`
  });

  return NextResponse.json({ status: 'success' });
}
