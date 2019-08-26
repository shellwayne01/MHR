//Populate lists - Food, Movies, Books, Restaurants not included for now
var data = {
  nicheEvents: ['Conferences', 'Hackathons', 'Volunteering', 'SLS', 'CC'],
  concerts: ['Rihanna', 'Raye', 'Miguel', 'Tinashe'],
  nightlife: ['American', 'Latino', 'Carribbean'],
  domDest:['New York', 'Pennsylvania','Florida','California'],
  intDest:[ 'China', 'Virgin Islands', 'Panama', 'Nigeria',' Poland']
}

var keysArray = Object.keys(data)
var valuesArray = Object.values(data)
console.log(keysArray)
console.log(keysArray.length)

addListItems(valuesArray[0], keysArray[0]);
addListItems(valuesArray[1], keysArray[1]);
addListItems(valuesArray[2], keysArray[2]);
addListItems(valuesArray[3], keysArray[3]);
addListItems(valuesArray[4], keysArray[4]);

//Carousels
var galleryCollection = document.getElementsByClassName('gallery')
console.log(galleryCollection)

for(i=0; i< galleryCollection.length; i++){
  console.log(galleryCollection[i].clientTop)
  console.log(galleryCollection[i].clientWidth)
  galleryCollection[i].addEventListener("mouseover", playGallery)
}

//Fix callback if possible to simplify population
// for (i=0; i<keysArray.length;){
//   console.log("Adding items from key " + keysArray[i] )
//   addListItems(valuesArray[i], keysArray[i], function(){
//     i++;
//   });
// }


var destinations = document.querySelectorAll("#intDest li")
var lats  = [39.90,18.04,8.53,9.08,51.91] //north-south
var longs = [116.40,-64.83,-80.78,8.67,19.14] //east-west

var map = L.map('map', {
    center: [18, -7],
    zoom: 2
});

// var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)'
L.tileLayer(osmUrl,{attribution: osmAttr}).addTo(map);

//Works just fine
// var dest = destinations[0].innerHTML;
// var marker = L.marker([lats[0], longs[0]]);
// marker.bindPopup(dest).openPopup();
// marker.addTo(map);

for (i=0; i<lats.length; i++){
  var dest = destinations[i].innerText;
  var marker = L.marker([lats[i], longs[i]]);
  // var popup = L.popup()
  //   .setContent(dest);
  // marker.bindPopup(popup).openPopup();
  marker.bindPopup(dest);
  marker.addTo(map);
}

// Methods
function addListItems(dataArray, containerId){
   var container = document.getElementById(containerId)
   for(i=0; i<dataArray.length; i++){
     container.innerHTML += '<li>'+dataArray[i]+'</li>'
   }
}

//FIX LATER
// var id = setInterval(playGallery, 5); //wait to allow playGallery
// function playGallery(){
//   var images = this.children
//   Transform images within gallery
//   if ( ) {
//     // clearInterval(id);
//   }
//   else {
//     for (i=0; i<images.length; i++){
//       images[i].style.animation = "moveLeft 15s infinite";
//     }
//   }


  //Transform Entire Gallery
  // this.style.transform = 'translateX(-300px)';

  // console.log(this.style)
  // if (test for finished ) {
  //   clearInterval(id);
  // } else {
  //   code to change the element style
  // }
// }

//Galleries
var restArr = ["https://s3-media3.fl.yelpcdn.com/bphoto/5179Qe1e_rq0kOsi2aHELQ/ls.jpg",
"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i6JDE_NnDhiA/v1/-1x-1.jpg",
"https://havanacafe.info/images/img_6194-small.jpg?crc=468475893",
"https://www.simplyrecipes.com/wp-content/uploads/2019/04/Nachos-LEAD-3.jpg"]
var restIndex = 0

var movieArr = ["https://is1-ssl.mzstatic.com/image/thumb/Video118/v4/00/ee/3a/00ee3a87-eeda-6d4b-bb4b-5a45ef1e4579/contsched.vhzbldts.lsr/268x0w.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/A_Bronx_Tale.jpg/220px-A_Bronx_Tale.jpg",
"https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
"https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"]
var movieIndex = 0

var bookArr = ["https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/TreeGrowsInBrooklyn.jpg/220px-TreeGrowsInBrooklyn.jpg",
"https://images-na.ssl-images-amazon.com/images/I/51NVHJqbUmL._SX329_BO1,204,203,200_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/41iffjvqdQL._SX322_BO1,204,203,200_.jpg",
"https://pictures.abebooks.com/1LACEYLANE/3700700586.jpg"]
var bookIndex = 0

var Images = {"restaurantGallery2":[restArr, restIndex], "movieGallery2":[movieArr, movieIndex],"bookGallery2":[bookArr,bookIndex] }

// Circular array not necessary
// var counter = index % imageArr.length
function prevImg(gallery){
  console.log(gallery.id)
  var query = '#'+ gallery.id +' .mainGalleryImg'
  var mainImg = document.querySelector(query)
  var imageArr = Images[gallery.id][0]
  var index = Images[gallery.id][1]

  if(index==0){
    Images[gallery.id][1] = imageArr.length - 1
  }else{
    Images[gallery.id][1] -= 1
  }
  // console.log(Images[gallery.id][1])
  // console.log(imageArr[index])
  mainImg.src = imageArr[Images[gallery.id][1]]
}

function nextImg(gallery){
  console.log(gallery.id)
  var query = '#'+ gallery.id +' .mainGalleryImg'
  var mainImg = document.querySelector(query)
  var imageArr = Images[gallery.id][0]
  var index = Images[gallery.id][1]

  if(index == imageArr.length - 1){
    Images[gallery.id][1] = 0
  }else{
    Images[gallery.id][1] += 1
  }
  // console.log(Images[gallery.id][1])
  // console.log(imageArr[index])
  mainImg.src = imageArr[Images[gallery.id][1]]
}
