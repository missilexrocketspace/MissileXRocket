import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const gmailUser = process.env.ADMIN_GMAIL;
const gmailPass = process.env.ADMIN_GMAIL_PASSWORD;

const MAX_TOTAL_BYTES = 20 * 1024 * 1024;

export async function POST(request: Request) {
  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: 'Email configuration missing.' }, { status: 500 });
  }

  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const projectTitle = formData.get('projectTitle');
  const description = formData.get('description');
  const technology = formData.get('technology');
  const githubUrl = formData.get('githubUrl');
  const patentStatus = formData.get('patentStatus');

  if (!name || !email || !phone || !projectTitle || !description) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const files = formData.getAll('files').filter((entry): entry is File => entry instanceof File && entry.size > 0);

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_BYTES) {
    return NextResponse.json({ error: 'Attachments exceed the 20MB limit.' }, { status: 413 });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer())
    }))
  );

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass }
  });

  await transporter.sendMail({
    from: gmailUser,
    to: gmailUser,
    subject: `MissileX Research Submission — ${projectTitle}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Title: ${projectTitle}`,
      `Technology Used: ${technology || 'N/A'}`,
      `GitHub Repository: ${githubUrl || 'N/A'}`,
      `Patent Status: ${patentStatus || 'N/A'}`,
      `Submitted: ${new Date().toISOString()}`,
      `Attachments: ${files.length ? files.map((f) => f.name).join(', ') : 'None'}`,
      '',
      'Description:',
      String(description)
    ].join('\n'),
    attachments
  });

  return NextResponse.json({ status: 'success' });
}
