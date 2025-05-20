var express = require('express');
var router = express.Router();

/* home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', pageName: "home.ejs" });
});

/* login page */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login', pageName: "auth/login.ejs" });
});

/* signUp page */
router.get('/signUp', function(req, res, next) {
  res.render('index', { title: 'signUp', pageName: "auth/signUp.ejs" });
});

/* signUp page */
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: 'mypage', pageName: "auth/mypage.ejs" });
});

module.exports = router;
