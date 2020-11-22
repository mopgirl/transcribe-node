import * as express from 'express';
import * as BodyParser from 'body-parser';
import upload from '../routes/upload';
import * as expressListEndpoints from 'express-list-endpoints';
import notImpl from '../routes/upload';
import { createExpressServer } from 'routing-controllers';
import { S3AccessController } from './controllers/S3AccessController';
import { UserController } from './controllers/UserController';

const application = createExpressServer({
    controllers : [S3AccessController, UserController]
});
// const app = express();
const port = 3000;

//TOP
application.get('/', (req, res) => res.send('Hello World!'));
//
// const usersRouter = require('../routes/users');
// //JSONを受け取れるようにする
// app.use(BodyParser.urlencoded({ extended : true }));
// app.use(BodyParser.json);
//
// //各EndPointの登録
// app.use('/users', usersRouter);
// app.use('/s3', upload);

const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};
application.use(allowCrossDomain);
application.listen(port, () => {
    console.log(`app listening on port ${ port }!`);
    const endPoints: Array<ApplicationEndPoint> = expressListEndpoints(application);
    const paths = endPoints.map(endpoint => endpoint.path);
    console.log(paths);
});


interface ApplicationEndPoint {
    path: string;
    method: Array<string>;
    middleware: Array<string>;
}
