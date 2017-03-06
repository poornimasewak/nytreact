// Requiring NPM packages
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// Requiring Article model
var Articles = require('./models/article');

var app = express();
// Set initial port
var PORT = process.env.PORT || 3000; 

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// Open a connection to the 'nytreact' database on my locally running instance of MongoDB.
mongoose.connect('mongodb://localhost/nytreact');

// A pending connection to the nytreact database running on localhost.
var db = mongoose.connection;
// To get notified if we connect successfully or if a connection error occurs.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongoose connection successful.');
});

// Set route to display home/index/main page to render React app.
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

// Set route to get all the saved Articles from the DB
app.get(`/api/saved`, function (req, res) {
 Articles.find({}).exec(function (err, articleDoc) {
        if (err) {
            console.log(err);
        } else {

        res.send(articleDoc);
        }
    });
 });
// To save an article to the database.
 app.post(`/api/saved`, function (req, res) {
     var newArticle = new Articles ({
         title: req.body.abstract,
         date: req.body.pub_date,
         url: req.body.web_url
     });
     newArticle.save(function (err, article) {
         if (err) {
             console.log(err);
         } else {
             console.log('data is saved');
         }
     });
 });
// To delete a saved article in the database.
 app.delete(`/api/saved`, function (req, res) {
     
 });
 app.get(`*`, function (req, res) {
     
 });
 
//  On what Port server is listening
app.listen(PORT, function() {
    console.log ("listening at : " + PORT);
});