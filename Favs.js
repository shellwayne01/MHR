var destinations = document.querySelectorAll("#intDest li")
var lats  = [39.90,18.04,18.22,9.08,51.91] //north-south
var longs = [116.40,-64.83,-66.59,8.67,19.14] //east-west

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
  var dest = destinations[i].innerHTML;
  var marker = L.marker([lats[i], longs[i]]);

  //Fix later
  // var popup = L.popup()
  //   .setContent(dest);
  // marker.bindPopup(popup).openPopup();
  // marker.bindPopup(dest).openPopup();
  marker.addTo(map);
}

// function check(child) {
//   return child.tagName == "LI";
// }
