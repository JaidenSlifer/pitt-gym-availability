import { NextApiRequest, NextApiResponse } from "next";
import { Count } from "@global/models";
import { listAllCounts } from "@global/db";

export default async function handler(req: NextApiRequest, resp: NextApiResponse<Count[]>) {

  let rows: Count[] = await listAllCounts();

  resp.status(200).json(rows);

}