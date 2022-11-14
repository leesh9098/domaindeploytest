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
            ":user_info": "010-0000-0000",
            ":story_name": "스토리이름"
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