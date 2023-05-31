import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`https://api.zaffari.com.br/site-shopping/receitas?idCategoria=1&pageSize=99999`,{
        headers: { 
          'Ocp-Apim-Subscription-Key': '0bfe8e7ea79245e484e3dca6668137f9', 
          }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
