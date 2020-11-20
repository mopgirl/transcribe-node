import { S3 } from 'aws-sdk';
import * as uuid from 'uuid';
import * as Express from 'express';

export class S3FileUploader {

    public upload(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        const bucketName = 'transcribe-target';
        const keyName = uuid.v4();

        const bucketPromise = new S3({ apiVersion : '2006-03-01' })
            .createBucket({ Bucket : bucketName })
            .promise();

        bucketPromise.then(
            function(data) {
                const objectParam = { Bucket : bucketName, Key : keyName, Body : 'HelloWorld' };
                const uploadPromise = new S3({ apiVersion : '2006-03-01' })
                    .putObject(objectParam)
                    .promise();
                uploadPromise.then(
                    function(data) {
                        console.log('Successfully uploaded data to ' + bucketName + '/' + keyName);
                    });

            }
        ).catch((err => {
            console.error(err, err.stack);
        }));

    }

}
