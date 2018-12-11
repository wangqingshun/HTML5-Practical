var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*
var $mysql = require("mysql");
var sql = require("./modules/mysql.js");
var $sql = $mysql.createConnection(sql.mysql);
$sql.connect();
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var shareRouter = require('./routes/share');
var videoRouter = require('./routes/video');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/home',homeRouter);
app.use('/api/share',shareRouter);
app.use('/api/share/video',videoRouter);
/*var Home=(function(){
function Home(id,src,p){
        this.id=id;
        this.src=src;
        this.p=p;
}
        return Home;
}());
var Homearr=[
        new Home(1,'http://39.96.21.142:3000/public/images/tuijian1.jpg','皮蛋熟肉粥'),
        new Home(2,'http://39.96.21.142:3000/public/images/tuijian2.jpg','可乐鸡翅'),
        new Home(3,'http://39.96.21.142:3000/public/images/tuijian3.jpg','可口鱼汤'),
        new Home(4,'http://39.96.21.142:3000/public/images/tuijian4.jpg','美味牛排'),
        new Home(5,'http://39.96.21.142:3000/public/images/tuijian5.jpg','美味糕点'),
        new Home(6,'http://39.96.21.142:3000/public/images/tuijian6.jpg','经典徽菜')
]
app.get('/api/home',function(req,res){
        res.json(Homearr);
})
*/

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
