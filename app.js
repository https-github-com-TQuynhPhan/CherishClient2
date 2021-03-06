const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./auth/passport');
const expressHandlebarsSection=require('express-handlebars-sections');
const hbs=require('hbs');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./components/product/productRouter');
const contactRouter = require('./components/contact/contact');
const authRouter = require('./components/auth/authRouter');
const sessionHandler = require('./auth/sessionHandler');
const loggerHandler = require('./auth/logger');
const apiProductRouter=require('./api/product/index');
const cartRouter=require('./components/cart/cartRouter');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error to connect database');
});

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', [__dirname + '/views', __dirname + '/components']);
app.set('view engine', 'hbs');

// hbs.handlebars.registerHelper(expressHandlebarsSection());
expressHandlebarsSection(hbs.handlebars);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365},
    secret: process.env.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use(sessionHandler);
app.use(loggerHandler);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/contact', contactRouter);
app.use('/', authRouter);
app.use('/api/product',apiProductRouter);
app.use('/cart',cartRouter);

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
