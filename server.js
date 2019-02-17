// Todo:
// FIX var vs const
// FIX async vs sync
// FIX double quotations before adding to db
// Change to npm run dev to run client and server simultanelously

// App + Server
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
});

// DB Config
var mongoose = require('mongoose')
const db = require('./keys_dev').mongoURI;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Scraping w/ Cheerio and updating JSON file
var qP = require('./quoteParser') //refreshes the JSON file on first load

const dbPost = new Schema({
  author: ObjectId,
  body: Object,
  date: Date
});
var User = mongoose.model("User", dbPost);

// Read JSON file
var fs = require('fs');
var quotesArray;
fs.readFile('Quotes.json', 'utf8', function (err, data) {
  if (err) throw err;
  quotesArray = JSON.parse(data);
});

// Routes - change to ejs later
app.get('/home', function(req, res) {
  // res.render('index');
  // res.sendFile(__dirname + "/index.html");
});

// Update DB using get f(x) for now since I'm not using any HTML forms
app.get("/addQuotes", (req, res) => {
  // var myData = new User(obj);
  // myData.save()
  User.collection.insertMany(quotesArray)
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
