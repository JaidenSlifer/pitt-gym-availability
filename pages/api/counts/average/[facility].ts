import { listAvgCounts } from '@global/db';
import { AverageCount } from '@global/models';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, resp: NextApiResponse<AverageCount[]>) {
  const { facility } = req.query;

  if(Array.isArray(facility)) {
    resp.status(400).end('Facility must be a string containing facility name')
  }

  let rows: AverageCount[] = await listAvgCounts(decodeURIComponent(facility as string));
  
  resp.status(200).json(rows)
}