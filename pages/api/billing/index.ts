import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    axios.request({
        method: "POST",
        url: `https://api.tosspayments.com/v1/billing/authorizations/bln_K5Lq0PwpL`,
        headers: {
            Authorization: "Basic dGVzdF9za19PRVA1OUx5Ylo4Qmc1ZW5wa05HMzZHWW83cFJlOg==",
            'Content-Type': 'application/json'
        },
        data: {
            customerKey: '2X6rWjNeP4sD1OVkNh6tz'
        }
    })
    .then(response => {
        return res.send(response.data);
    })
    .catch(err => {
        return console.error(err);
    })
}