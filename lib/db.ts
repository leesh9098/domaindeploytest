import * as AWS from 'aws-sdk';

export class AWSDynamoDBClient {
    db: AWS.DynamoDB.DocumentClient;
    constructor() {
        const region = 'ap-northeast-2';
        const endpoint = "dynamodb.ap-northeast-2.amazonaws.com";


        AWS.config.update({
            accessKeyId: '',
            secretAccessKey: '',
            region: ''
        })

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