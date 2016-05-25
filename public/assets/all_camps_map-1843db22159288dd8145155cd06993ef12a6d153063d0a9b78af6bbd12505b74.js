"<script src="/assets/gmap_functions-0ab4d28c5c9870d317b4cd518794f1b09ede1506bb0fbad2baee8d958599fd90.js"></script>"

var defaultLat = 59.332296;
var defaultLon = 18.035948;
var lat = defaultLat;
var lng = defaultLon;
var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

var center = {
    "lat": lat,
    "lng": lng,
    "infowindow": "Din aktivitet",
};
var zoom = 14;

window.onload = function(){ 
  hdl = initMap(center, zoom, JSON.parse(localStorage.getItem('all_camps')), center);
};
