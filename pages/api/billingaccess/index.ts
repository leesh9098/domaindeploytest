import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    axios.request({
        method: "POST",
        url: "https://api.tosspayments.com/v1/billing/hYrW89FUs7nDmpWA-OP5tpdx4Te_qo5pZIRpL9TVeiI=",
        headers: {
            Authorization: "Basic dGVzdF9za19PRVA1OUx5Ylo4Qmc1ZW5wa05HMzZHWW83cFJlOg==",
            'Content-Type': "application/json"
        },
        data: {
            amount: 100,
            customerKey: "2X6rWjNeP4sD1OVkNh6tz"
        }
    })
    .then(response => {
        return res.send(response.data)
    })
    .catch(err => console.error(err))
}