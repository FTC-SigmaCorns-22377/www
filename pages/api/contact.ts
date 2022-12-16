import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: implement discord webhook
  // TODO: implement env variable
  res.status(200).json({ success: false });
}
