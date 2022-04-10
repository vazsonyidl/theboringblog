export default async function handler(req: any, res: any) {
  const { period, quote } = req.query || {};

  const data = await fetch(`https://sandbox.iexapis.com/stable/stock/${quote}/dividends/${period}?token=${process.env.API_KEY}`)
    .then(res => res.json())
  res.status(200).json({ data })
}
