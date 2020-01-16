var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Setup MongoDB
//var mongoose = require('mongoose');
//var db = mongoose.connection;
//db.on('error', console.error);
//db.once('open', function () {
    // CONNECTED TO MONGODB SERVER
//    console.log("Connected to mongod server");
//});

// Construct mongodb connection
//mongoose.connect('mongodb://localhost/wantok');

var indexRouter = require('./routes/index');
var index2Router = require('./routes/index2');
var choiceRouter = require('./routes/choice');
var no1Router = require('./routes/no1');
var no2Router = require('./routes/no2');
var no3Router = require('./routes/no3');
var no4Router = require('./routes/no4');
var yes1Router = require('./routes/yes1');
var yes2Router = require('./routes/yes2');
var yes3Router = require('./routes/yes3');
var finalRouter = require('./routes/final');
var endsRouter = require('./routes/ends');


// Admin route
var adminViRouter = require('./routes/admin-village');

var app = express();

// Body-parser
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// File Upload
const fileUpload = require('express-fileupload');
// default options
app.use(fileUpload());
//app.use(bodyParser.urlencoded());
// param
/*
app.param('trackid', function (request, response, next, trackid) {
    request.abc = trackid;
    return next();
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// for parsing multipart/form-data
//app.use(upload.array());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index2', index2Router);
app.use('/choice', choiceRouter);
app.use('/no1', no1Router);
app.use('/no2', no2Router);
app.use('/no3', no3Router);
app.use('/no4', no4Router);
app.use('/yes1', yes1Router);
app.use('/yes2', yes2Router);
app.use('/yes3', yes3Router);
app.use('/final', finalRouter);
app.use('/ends', endsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;