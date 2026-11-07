/**
 * File Name: app.js
 * Student's Name: WangZhenghao
 * StudentID: 2024110451
 * Date: 2026-11-05
 *
 * Description:
 * LPoster - Personal Portfolio Website (COMP229 Assignment 1).
 * Main Express application entry. Sets up the view engine (EJS),
 * static assets middleware and all site routes.
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Site router - defines all 5 pages of the portfolio
var indexRouter = require('./routes/index');

var app = express();

// ==================== View Engine Setup ====================
// Use EJS templating engine, templates live in the /views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ==================== Middleware ====================
app.use(logger('dev'));                                        // request logging
app.use(express.json());                                       // JSON body parsing
app.use(express.urlencoded({ extended: false }));              // form data parsing
app.use(cookieParser());                                       // cookie parsing
app.use(express.static(path.join(__dirname, 'public')));       // static assets (css/js/images)

// ==================== Routes ====================
app.use('/', indexRouter);

// ==================== Error Handling ====================
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Development error handler - shows the stack trace
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
