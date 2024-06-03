import client from '../../sanity';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await client.create({
        _type: 'formSubmission',
        name,
        email,
        message,
      });

      res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
