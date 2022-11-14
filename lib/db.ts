import * as AWS from 'aws-sdk';

export class AWSDynamoDBClient {
    db: AWS.DynamoDB.DocumentClient;
    constructor() {
        const region = process.env.AWS_DDB_REGION;
        const endpoint = process.env.AWS_DDB_ENDPOINT;

        if (!endpoint) {
            this.db = new AWS.DynamoDB.DocumentClient({
                region: region,
            });
        } else {
            this.db = new AWS.DynamoDB.DocumentClient({
                region: region,
                endpoint: endpoint,
            });
        }
    }
}