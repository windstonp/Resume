import { mailOptions, transporter } from 'lib/nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `new contact from personal website! from ${data.name} || ${data.email}`,
        text: 'this is a test String!',
        html: `
          <h1>${data.service}</h1>
          <h3>Customer name:</h3>
          <p>${data.name}</p>
          <h3>Contact:</h3>
          <p>${data.email}</p>
          <h3>Project Budget:</h3>
          <p>${data.budget}</p>
          <h3>Client message || Project especification:</h3>
          <p>${data.message}</p>
        `,
      });
      return res.status(200).json({ success: true });
    } catch (e) {
      return res.status(400).json({ message: 'Oops! Something Bad Happened!' });
    }
  }
  return res.status(400).json({ message: 'Bad Request' });
}
