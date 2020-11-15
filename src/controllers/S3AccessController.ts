import * as Express from 'express';
import { Get, JsonController } from 'routing-controllers';


export default function notImplemented(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    res.status(501).json({ message : 'Not Implemented.' });
}

@JsonController('/s3')
export class S3AccessController {
    @Get('/')
    get() {
        return '3343fjoaeprw@56';
    }
}
