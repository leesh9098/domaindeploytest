import { NextApiRequest, NextApiResponse } from "next";
import { AWSDynamoDBClient } from "../../../lib/db";

const ddb = new AWSDynamoDBClient().db;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const params = {
            TableName: "scantest",
            IndexName: "storyName-index",
            FilterExpression: "userInfo = :user_info",
            KeyConditionExpression: "storyName = :story_name",
            ExpressionAttributeValues: {
                ":user_info": req.body.userInfo,
                ":story_name": req.body.storyName
            }
        }

        ddb.query(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.Items);
            }
        })
    }
}