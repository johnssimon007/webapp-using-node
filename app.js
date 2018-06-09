var express = require('express')
,register=require('./register')
, http = require('http')
,path = require('path')
,auth=require('./auth')
,bodyParser = require("body-parser")
,mysql = require('mysql')
,session = require('express-session')
,flash = require('connect-flash-plus');
var app = express();
//session
app.use(session({
  secret: 'cyberpunk',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//routes
app.get('/',function(req,res){
  res.render('login');
});
app.get('/profile',function(req,res){
  res.render('profile');
});
app.get('/signup',function(req,res){
  res.render('signup');
});
app.get('/login',function(req,res){
  res.render('login');
});
app.get('/logout',function(req,res){
      messages = 'logged out succesfully';
      res.render('login', { messages:messages });
      req.session.destroy();
});
//route for auth and register
app.post('/register',register.add);
app.post('/login',auth.login);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(8080)
