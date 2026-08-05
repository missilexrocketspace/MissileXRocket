import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const gmailUser = process.env.ADMIN_GMAIL;
const gmailPass = process.env.ADMIN_GMAIL_PASSWORD;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: 'Email configuration missing.' }, { status: 500 });
  }

  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const position = formData.get('position');
  const coverNote = formData.get('coverNote');

  if (!name || !email || !phone || !position) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const resume = formData.get('resume');
  const attachments: { filename: string; content: Buffer }[] = [];

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_TOTAL_BYTES) {
      return NextResponse.json({ error: 'Resume exceeds the 10MB limit.' }, { status: 413 });
    }
    attachments.push({ filename: resume.name, content: Buffer.from(await resume.arrayBuffer()) });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass }
  });

  await transporter.sendMail({
    from: gmailUser,
    to: gmailUser,
    subject: `MissileX Career Application — ${position} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position: ${position}`,
      `Submitted: ${new Date().toISOString()}`,
      '',
      'Cover Note:',
      String(coverNote || 'N/A')
    ].join('\n'),
    attachments
  });

  return NextResponse.json({ status: 'success' });
}
