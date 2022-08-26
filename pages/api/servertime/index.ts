import { NextApiRequest, NextApiResponse } from "next";
import { getServerTime } from "../../../getServerTime";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        {
            servertime: getServerTime()
        }
    )
}