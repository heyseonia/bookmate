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
router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'signup', pageName: "auth/signup.ejs" });
});

/* myPage page */
router.get('/mypage', function(req, res, next) {
    const isLogin = localStorage.getItem("bookmateIsLogin");
    console.log(next);
    if(isLogin){
      res.render('index', { title: 'mypage', pageName: "auth/mypage.ejs" });
    }else{
      router.get('/login', function(req, res, next) {
        res.render('index', { title: 'login', pageName: "auth/login.ejs" });
      });
    }
});

module.exports = router;
