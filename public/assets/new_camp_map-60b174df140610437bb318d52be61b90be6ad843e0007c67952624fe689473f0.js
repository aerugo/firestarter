var defaultLat = 65.1486046;
var defaultLon = -19.1305533;
var lat = defaultLat;
var lng = defaultLon;
var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

var center = {
    "lat": lat,
    "lng": lng,
    "infowindow": "Merkið þitt",
    "id": 1
};
var zoom = 6;

window.onload = function(){ 
  hdl = initMap(center, zoom, JSON.parse(localStorage.getItem('all_camps')), center);
};
