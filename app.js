var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require("./config");
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var auth = require('./routes/auth');
var existence = require('email-existence');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const fileUpload = require('express-fileupload');
//connect db
console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());
require('./api/models/cinemaModel');
require('./api/models/userModel');
require('./api/models/user');
var indexRouter = require('./routes/index');
var taophimRouter = require('./routes/taophim');
var trangchuRouter = require('./routes/trangchu');
var chitietphimRouter = require('./routes/chitietphim');
var profileRouter = require('./routes/profile');
var filmProfileRouter = require('./routes/filmProfile');
var app = express();
var port = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//angular


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysecret', resave: true, saveUninitialized: false}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', auth);
app.use(fileUpload());



app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use(flash());
var setupController = require("./api/controller/setupController");
setupController(app);
app.use('/', trangchuRouter);
app.use('/taophim', taophimRouter);
app.use('/chitietphim',chitietphimRouter);
app.use('/profile',profileRouter);
app.use('/filmProfile',filmProfileRouter);
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