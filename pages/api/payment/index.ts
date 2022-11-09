import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
    method: "POST",
    url: "https://api.tosspayments.com/v1/payments/confirm",
    headers: {
        Authorization: "Basic dGVzdF9za19PRVA1OUx5Ylo4Qmc1ZW5wa05HMzZHWW83cFJlOg==",
        'Content-Type': 'application/json'
    },
    data: {
        paymentKey: '5lqNRYD097kZLKGPx4M3MgllbEZj7rBaWypv1o6bemnOJz2X',
        amount: 1,
        orderId: 'XBrDsMnKciMxjgZIGO8HE'
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    axios.request({
        method: "GET",
        url: `https://api.tosspayments.com/v1/payments/orders/${req.body.orderId}`,
        headers: {
            Authorization: "Basic dGVzdF9za19PRVA1OUx5Ylo4Qmc1ZW5wa05HMzZHWW83cFJlOg==",
            'Content-Type': 'application/json'
        },
        data: {
            paymentKey: req.body.paymentKey,
            amount: 1,
            orderId: req.body.orderId
        }
    })
        .then(response => {
            return res.send(response.data);
        })
        .catch(err => {
            return console.error(err);
        })
}