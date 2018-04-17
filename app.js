var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require("./config");

//connect db
console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());

var indexRouter = require('./routes/index');
var taophimRouter = require('./routes/taophim');
var trangchuRouter = require('./routes/trangchu');
var chitietphimRouter = require('./routes/chitietphim');
var app = express();
var port = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var setupController = require("./api/controller/setupController");
setupController(app);

app.use('/', indexRouter);
app.use('/taophim', taophimRouter);
app.use('/trangchu',trangchuRouter);
app.use('/chitietphim',chitietphimRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(port, function(){
  console.log("App listening on port: " + port);
});