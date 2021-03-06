var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const hbs = require('hbs');

var indexRouter = require('./routes/index');
var customersRouter = require('./routes/customers');
var productsRouter = require('./routes/products');
var orderRouter = require('./routes/orders');
var categoryRouter = require('./routes/categories');
var distributorRouter = require('./routes/distributors');
var brandRouter = require('./routes/brands');
var authenRouter = require('./routes/authen');
var adminRouter = require('./routes/admin');
var apiAdminRouter = require('./routes/api/admin')

const Admin = require('./models/admin');

passport.use(new localStrategy({
    usernameField: 'email'
  },
  async (username, password, done) => {
    try {
      const admin = await Admin.getByEmail(username);
      if (!admin)
        return done(null, false, {
          message: 'Incorrect username or password.'
        });
      const isVerify = await Admin.verify(username, password);
      if (!isVerify)
        return done(null, false, {
          message: 'Incorrect username or password.'
        });
      return done(null, admin);
    } catch (ex) {
      return done(ex);
    }
  }
))

passport.serializeUser((admin, done) => {
  done(null, admin.email);
});

passport.deserializeUser(async (email, done) => {
  const admin = await Admin.getByEmail(email);
  done(undefined, admin);
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function (name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function (name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "secret"
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/customer', customersRouter);
app.use('/product', productsRouter);
app.use('/order', orderRouter);
app.use('/category', categoryRouter);
app.use('/distributor', distributorRouter);
app.use('/brand', brandRouter);
app.use('/authen', authenRouter);
app.use('/admin', adminRouter);
app.use('/api/admin', apiAdminRouter);



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