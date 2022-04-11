import * as sst from '@serverless-stack/resources'

export default class StorageStack extends sst.Stack {
    table;
    bucket;

    constructor(scope: sst.App, id: string, props?: sst.StackProps) {
        super(scope, id, props);

        // DynamoDB table
        this.table = new sst.Table(this, "Notes", {
            fields: {
                userId: sst.TableFieldType.STRING,
                noteId: sst.TableFieldType.STRING
            },
            primaryIndex: {partitionKey: "userId", sortKey: "noteId"}
        })

        this.bucket = new sst.Bucket(this, "Uploads")

    }
}