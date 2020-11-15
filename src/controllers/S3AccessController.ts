import * as Express from 'express';
import { Get, JsonController, Put } from 'routing-controllers';
import { S3FileUploader } from '../feature/request/S3FileUploader';
import { request } from 'express';


export default function notImplemented(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    res.status(501).json({ message : 'Not Implemented.' });
}

@JsonController('/s3')
export class S3AccessController {
    private fileUploader: S3FileUploader;

    constructor() {
        this.fileUploader = new S3FileUploader();//FIXME to use DI.
    }

    @Get('/')
    get() {
        return '3343fjoaeprw@56';
    }

    @Get('/upload')
    put(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        this.fileUploader.upload(req, res, next);

    }
}
