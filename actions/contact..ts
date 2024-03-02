// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, query } = req.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Specify your email service provider
        service: 'gmail',
        auth: {
          user: 'your_email@gmail.com', // Your email address
          pass: 'your_password' // Your email password
        }
      });

      // Send email
      await transporter.sendMail({
        from: 'your_email@gmail.com', // Sender email address
        to: 'your_email@gmail.com', // Your email address
        subject: 'New query from your website',
        text: `Name: ${name}\nEmail: ${email}\nQuery: ${query}`
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
