var destinations = document.querySelectorAll("#intDest li")
var lats  = [9.748917,18.044230,18.220833,9.081999,51.919437]
var longs = [-83.753426,-64.835892,-66.590149,8.675277,19.145136]

// destinations.filter(check)
// console.log(typeof destinations)
// console.log(destinations)

var map = L.map('map', {
    center: [18, -7],
    zoom: 2
});


// var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}'
// var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
// L.tileLayer(osmUrl,{foo: 'bar', attribution: osmAttr}).addTo(map);

//I assume the issue with formatting is due to the tile server.
var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
L.tileLayer(osmUrl,{attribution: osmAttr}).addTo(map);

// var dest = destinations[0].innerHTML;
// var marker = L.marker([lats[0], longs[0]]);
// marker.bindPopup(dest).openPopup();
// marker.addTo(map);


for (i=0; i<lats.length; i++){
  var dest = destinations[i].innerHTML;
  var marker = L.marker([lats[i], longs[i]]);
  marker.bindPopup(dest).openPopup();
  marker.addTo(map);
}

// function check(child) {
//   return child.tagName == "LI";
// }
