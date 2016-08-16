
var defaultLat = 64.111795;
var defaultLon = -21.887454;
var lat = defaultLat;
var lng = defaultLon;
var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

var center = {
    "lat": lat,
    "lng": lng,
};
var zoom = 10;

window.onload = function(){ 
  hdl = initMap(center, zoom, JSON.parse(localStorage.getItem('all_camps')));
};

