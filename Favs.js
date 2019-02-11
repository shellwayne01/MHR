const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://shellwayne01.github.io/aboutMe.html'; //for now just using this

rp(url)
  .then(function(html){
    //success!
    console.log(cheerio('big > a', html).length);
    console.log(cheerio('big > a', html));
    console.log('Yay!')
  })
  .catch(function(err){
    //handle error
  });
