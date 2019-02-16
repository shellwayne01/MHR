//Web Scraping w/ cheerio: Formatting/Parsing Data
const rp = require('request-promise');
const cheerio = require('cheerio');
// const url = 'https://shellwayne01.github.io/MHR/';

const parser = function (url){
rp(url)
  .then(function(html){
    //success!
    //Parse HTML and retrieve desired data
    var array1 = []; //phrases
    var array2 = []; //authors
    var quotes = []; //quote objects
    var len = cheerio('td', html).length;

    for (i=0; i < len; i++) {
      // console.log('TAG '+i+' :');
      if (isEven(i)){
      array1.push( cheerio('td', html)[i].children[0].data.toString() ); //based on html structure of site
      }else{
      array2.push( cheerio('td', html)[i].children[0].data.toString() );
      }
    }

    // console.log(len);
    // console.log(array1.length);
    // console.log(array2.length);

    //Populate quotes[] with quote objects
    for(i=0; i<array1.length; i++){
      var quote = new Quote(array1[i], array2[i]);
      quotes.push(quote);
    }

    console.log(quotes)
    return quotes;
  })
  .catch(function(err){
    //handle error
  });
};


function Quote(phrase, origin){
  this.phrase = phrase;
  this.origin = origin;
}

function isEven(number){
  return (number % 2 == 0)
}

module.exports = parser;
