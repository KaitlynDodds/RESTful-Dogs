const express   = require('express'),
      app       = express(),
      mongoose  = require('mongoose'),
      path      = require('path'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override');


// App Port
app.listen(3000, () => console.log('App listening on port 3000'));

// set view engine
app.engine('.ejs', require('ejs').__express);
app.set('views', __dirname + '/public')
app.set('view engine', 'ejs');

// Public dir setup 
app.use(express.static(__dirname + '/public'));

// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// semantic ui
app.use(express.static(path.join(__dirname, '/public/semantic')));

// routes
app.use(require('./routes'));


