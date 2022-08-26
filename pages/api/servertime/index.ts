import { NextApiRequest, NextApiResponse } from "next";
import { getServerTime } from "../../../getserverTime";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        {
            servertime: getServerTime()
        }
    )
}