require("dotenv").config()
const Handlebars = require('handlebars');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./database/database")
const flash = require("connect-flash")
const hbs  = require("hbs")
const home = require('./routes/home');
const auth = require('./routes/auth');
const passport = require("passport")
const session = require("express-session")
const methodOverride = require('method-override') 
const h = require('just-handlebars-helpers');

// Register just-handlebars-helpers with handlebars

require("./helpers/passport")
const app = express();

hbs.registerPartials(path.join(__dirname, "views/partials"))
h.registerHelpers(Handlebars);

app.use(flash())

db()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))


app.use(session({
  secret:"secret",
  resave:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {

  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error")
  app.locals.user = req.user
  next();
});



app.use('/', home);
app.use('/auth', auth);
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

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
