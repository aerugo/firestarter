var defaultLat = 59.3273924381445;
var defaultLon = 18.0422994709472;
var lat = defaultLat;
var lng = defaultLon;
var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

var center = {
    "lat": lat,
    "lng": lng,
    "infowindow": "Din aktivitet",
    "id": 1
};
var zoom = 15;

window.onload = function(){ 
  hdl = initMap(center, zoom, JSON.parse(localStorage.getItem('all_camps')), center);
};
