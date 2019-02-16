//Server + RESTfulAPI

//Server
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
});

//Scraping w/ Cheerio
// var rp = require('request-promise');
// var cheerio = require('cheerio');
var url = 'https://shellwayne01.github.io/MHR/';
var parsedQuotes = require('./quoteParser')

parsedQuotes(url);
// rp(url)
//   .then(function(html){
//     success!
//     console.log(html)
//     console.log("There are " + (cheerio('h1', html).length) + " instances of the tag:");
//     console.log(cheerio('h1', html).text()); //retrieves as a single string with all tag payload each seperated by a whitespace
//     console.log(cheerio('#Quotes', html));
//     console.log('Done')
//   })
//   .catch(function(err){
//     //handle error
//   });