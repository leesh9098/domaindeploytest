import { NextApiRequest, NextApiResponse } from "next";
import { AWSDynamoDBClient } from "../../../lib/db";

const ddb = new AWSDynamoDBClient().db;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
            // console.log(err);
            res.status(200).json(err);
        } else {
            // console.log(data.Items);
            res.status(200).json(data.Items)
        }
    })
}