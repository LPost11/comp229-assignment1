/**
 * File Name: index.js
 * Student's Name: WangZhenghao
 * StudentID: 2024110451
 * Date: 2026-11-05
 *
 * Description:
 * Routes for all 5 pages of the LPoster portfolio site.
 * Each page has its own Express Route that renders the
 * corresponding EJS view template.
 */

var express = require('express');
var router = express.Router();

/* ==================== GET Home Page ==================== */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home | LPoster',
    page: 'home'
  });
});

/* ==================== GET About Me Page ==================== */
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About Me | LPoster',
    page: 'about'
  });
});

/* ==================== GET Projects Page ==================== */
router.get('/projects', function (req, res, next) {
  res.render('projects', {
    title: 'Projects | LPoster',
    page: 'projects'
  });
});

/* ==================== GET Services Page ==================== */
router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Services | LPoster',
    page: 'services'
  });
});

/* ==================== GET Contact Me Page ==================== */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me | LPoster',
    page: 'contact'
  });
});

module.exports = router;
