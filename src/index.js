var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/s', function(req, res){
  res.json([0])
})

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// static files
app.use("/static", express.static('resources'));


app.listen(8080);
console.log('Server is listening on port 8080');