import { NextApiRequest, NextApiResponse } from "next";
import getServerTime from "../../../util/getServerTime";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        {
            serverTime: getServerTime()
        }
    )
}