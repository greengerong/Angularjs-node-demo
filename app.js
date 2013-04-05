
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , templates = require('./routes/templates')
  , items = require('./routes/items')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/items-template', templates.items);
app.get('/items-view-template', templates.view);
app.get('/items', items.getAll);
app.get('/items/:id', items.getById);
app.post('/items', items.add);
app.put('/items/:id', items.update);
app.delete('/items/:id', items.remove);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
