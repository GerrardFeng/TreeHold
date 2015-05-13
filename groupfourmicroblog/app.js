var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
// include the ejs
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
// ! change to use the HTML
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //replace expand mane ejs to html



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

//app.use('/', routes);
//app.use('/users', users);
app.get('/',function(request,respond){
    respond.sendfile('wlc.html');
});

//router
var microblogService = require("./backend/service/MicroblogService");
/*app.post('/AAA',function(request,response){

    console.log(request.body);
    console.log(request.body.username);
    console.log(request.body.email);

    var PersonModel = require('./backend/model/User').PersonModel;
    var PersonModelClose = require('./backend/model/User').close;
    PersonModel.find(function(err,persons){
        for(var i in persons){
            console.log(persons[i]);
        }
        PersonModelClose();
        response.write(JSON.stringify(persons));
        response.end();
    })

});*/

app.post('/BBB',function(request,reponse){
    console.log("BBB")
    //microblogService.findAllUSer(request,reponse);
    microblogService.saveMessage(request,reponse)
});
app.post('/CCC',function(request,reponse){
    console.log("CCC")
    //microblogService.findAllUSer(request,reponse);
    microblogService.findAllMessage(request,reponse)
});

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

app.listen(2850);
module.exports = app;
