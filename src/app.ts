// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const lessMiddleware = require('less-middleware');
// const logger = require('morgan');
//
// // const indexRouter = require('../routes/index');
// const usersRouter = require('../routes/users');
//
// const app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
//
// // app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
//
// module.exports = app;

import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const usersRouter = require('../routes/users');
app.use('/users', usersRouter);
app.listen(port, () => console.log(`Example app listening on port ${ port }!`));
