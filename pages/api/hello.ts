// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiKey } from './data/data'

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'GET'){
    res.status(200).json(apiKey)
  } else if ( req.method === 'POST') {
  
    apiKey.push(req.body)
    res.status(201).json(apiKey)
  }
  
}
