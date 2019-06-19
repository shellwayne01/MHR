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
    const $ = cheerio.load(html)
    var array1 = [];
    var array2 = [];
    var data = { "AllQuotes": [], "AllBooks": [], "AllMovies": [], "AllFood": [], "AllEvents": [], "AllTravel": [] }; //data as object
    var quote = [];
    // var len = cheerio('td', html).length;
    // console.log(len);


    $('#quotesTable').find('td').each(function (index, element) {
      if ( isEven(index) ){
        array1.push( $(element).text() ); //quote
      }else{
        array2.push( $(element).text() ); //origin
      }
    });

    // //Retrieves quotes (same as above)
    // for (i=0; i < qlen; i++) {
    //   // console.log('TAG '+i+' :');
    //   if ( isEven(i) ){
    //   array1.push( cheerio('#quotesTable td', html)[i].children[0].data.toString() ); //quote
    //   }else{
    //   array2.push( cheerio('#quotesTable td', html)[i].children[0].data.toString() ); //origin
    //   }
    // }


    //Populate quotes[] with quote objects ----> Loop not necessary, remove later
    for(i=0; i<array1.length; i++){
      var quote = new Quote(array1[i], array2[i]);
      data["AllQuotes"].push(quote);
    }

    //Populate data object with more objects. MondoDB will not accept strings only object/json format
    $('#Books').find('li').each(function (index, element) {
      var book = new Book($(element).text(), "N/A");
      data["AllBooks"].push( book );
    });

    //Change format to allow insert into DB
    $('#Movies').find('li').each(function (index, element) {
      data["AllMovies"].push( $(element).text() );
    });

    $('#Food').find('li').each(function (index, element) {
      data["AllFood"].push( $(element).text() );
    });

    $('#Events').find('li').each(function (index, element) {
      data["AllEvents"].push( $(element).text() );
    });

    $('#Travel').find('li').each(function (index, element) {
      data["AllTravel"].push( $(element).text() );
    });

    var json = JSON.stringify(data);
    fs.writeFile('public/Favs.json', json, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })

})


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

function Restaurant(name, address, city, phone){
  this.name = name;
  this.address = address;
  this.city = city;
  this.phone = phone;
}

function Event(name, date){
  this.name = name;
  this.date = date;
}

function isEven(number){
  return (number % 2 == 0);
}

// module.exports = rp(url);
