//Web Scraping with cheerio: Formatting/Parsing Data
//Modify to parse info the way you want
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://shellwayne01.github.io/MHR/';

// var options = {
//   url: url,
//   transform: function(body){
//     return cheerio.load(body); //cheerio can load html directly like this or by passing in context or root- see below
//   }
// };

//Using html parser might help here.
const quoteParse = function (url){
rp(url) //create an object to return desired info and export instead of all this stuff
  .then(function(html){
    //success!
    console.log(html)
    console.log('Yay!')
    console.log("There are " + (cheerio('h1', html).length) + " instances of the tag:");
    console.log(cheerio('h1', html.text));
  })
  .catch(function(err){
    //handle error
  });
};

module.exports = quoteParse;
