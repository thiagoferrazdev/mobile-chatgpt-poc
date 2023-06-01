import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.SITE_PRODUTOS}${req.query.product}`,{
        headers: { 
            'X-VTEX-API-AppKey': process.env.SITE_PRODUTOS_KEY, 
            'x-vtex-api-apptoken': process.env.SITE_PRODUTOS_TOKEN
          }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
