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

function addListItems(dataArray, containerId){
   var container = document.getElementById(containerId)
   for(i=0; i<dataArray.length; i++){
     container.innerHTML += '<li>'+dataArray[i]+'</li>'
   }
}
