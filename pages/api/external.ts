import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`https://hmlzaffari.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${req.query.product}`,{
        headers: { 
            'X-VTEX-API-AppKey': 'vtexappkey-hmlzaffari-PTNLUB', 
            'x-vtex-api-apptoken': 'HRSMWBBTUYZGJJTRZALWQIVSFJECGVLULCOLGPPWEOTWZEROASAMDZWZWZHMWZMYMEVGUIKKKPRBOYTARPCOVZRMFPOGHDZFBVKUJLURHQBOHUKYGGUGWYDMMJAETECH'
          }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
