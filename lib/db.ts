import * as AWS from 'aws-sdk';

export class AWSDynamoDBClient {
    db: AWS.DynamoDB.DocumentClient;
    constructor() {
        // const region = 'ap-northeast-2';
        // const endpoint = "dynamodb.ap-northeast-2.amazonaws.com";


        // AWS.config.update({
        //     // accessKeyId: 'AKIA6IY5JT23TVVTJVIM',
        //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        //     // secretAccessKey: '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',
        //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        //     region: 'ap-northeast-2'
        // })
        this.db = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_DEFAULT_REGION });
        // if (!endpoint) {
        //     this.db = new AWS.DynamoDB.DocumentClient({
        //         region: region,
        //     });
        // } else {
        //     this.db = new AWS.DynamoDB.DocumentClient({
        //         region: region,
        //         endpoint: endpoint,
        //     });
        // }
    }
}