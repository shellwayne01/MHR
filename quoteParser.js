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
    var array1 = [];
    var array2 = [];
    var data = {"AllQuotes": []}; //data as object
    var books = [];
    var quote = [];
    var toWatch = [];
    var qlen = cheerio('#quotesTable td', html).length;
    var blen = cheerio('#Books li', html).length;
    var mlen = cheerio('#Movies li', html).length;
    // var len = cheerio('td', html).length;
    console.log(qlen);
    console.log(blen);
    console.log(mlen);
    // console.log(len);

    //Retrieves quotes
    for (i=0; i < qlen; i++) {
      // console.log('TAG '+i+' :');
      if ( isEven(i) ){
      array1.push( cheerio('#quotesTable td', html)[i].children[0].data.toString() ); //quote
      }else{
      array2.push( cheerio('#quotesTable td', html)[i].children[0].data.toString() ); //origin
      }
    }

    // console.log(qlen);
    // console.log(array1.length);
    // console.log(array2.length);

    //Populate quotes[] with quote objects
    for(i=0; i<array1.length; i++){
      var quote = new Quote(array1[i], array2[i]);
      data["AllQuotes"].push(quote);
    }

    // console.log(quotes)

    var json = JSON.stringify(data);
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


//Custom Objects
function Quote(phrase, origin){
  this.phrase = phrase;
  this.origin = origin;
}

// function Book(title, author, genre, year){
//   this.title= title;
//   this.movies = movies;
// }
function Book(title, author){
  this.title = title;
  this.author = author;
}

function Movie(title, genre, year){
  this.title = title;
  this.genre = genre;
  this.year = year;
}


//Functions
function isEven(number){
  return (number % 2 == 0);
}

// module.exports = rp(url);
