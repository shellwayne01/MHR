//Web Scraping w/ cheerio: Formatting/Parsing Data
//Run in terminal
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://shellwayne01.github.io/MHR/';
var fs = require('fs');

// const parser = function (url){
rp(url)
  .then(function(html){
    //success!
    //Parse HTML and retrieve desired data
    var array1 = []; //phrases
    var array2 = []; //authors
    var quotes = {"AllQuotes": []}; //quotes object
    var books = [];
    var quote = [];
    var toWatch = [];
    var len = cheerio('td', html).length;
    console.log(len);

    //Retrieves quotes
    for (i=0; i < len; i++) {
      // console.log('TAG '+i+' :');
      if ( isEven(i) ){
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
      quotes["AllQuotes"].push(quote);
    }

    // console.log(quotes)

    var json = JSON.stringify(quotes);
    fs.writeFile('public/Favs.json', json, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })



    //Retrieves books and movies - ADD TO return object. Return all data not just these
    // secondary = cheerio('#IndoorFriendly', html);
    // primary = cheerio('li', secondary);
    // console.log(primary.text());
    // console.log(primary.length);

  //   for(i=0; i< primary.length; i++){
  //     toWatch.push((primary[''+i+'']).children[0].data.toString() );
  //     console.log(toWatch[i]);
  //   }
  //
  //   fs.readFile('Favs.json', json, 'utf8', (err, data) =>{
  //     if (err) throw err;
  //     json = JSON.parse(data)
  //     json.push(toWatch);
  //
  //     fs.writeFile('Favs.json', json, 'utf8');
  //   })
  //
  // })
 //  .catch(function(err){
 //    //handle error
 // });
})


function Quote(phrase, origin){
  this.phrase = phrase;
  this.origin = origin;
}

function Media(books, movies){
  this.books = books;
  this.movies = movies;
}

function isEven(number){
  return (number % 2 == 0);
}

// module.exports = rp(url);
