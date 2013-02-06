var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express["static"](path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

//
// Routes
//
app.get('/', function(req, res) {
    return res.render("index", {
        env: process.env.NODE_ENV === "production" ? "prod" : "dev"
    });
});
app.get('/rules', function(req, res) {
    return res.render("rules", {
        env: process.env.NODE_ENV === "production" ? "prod" : "dev"
    });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
