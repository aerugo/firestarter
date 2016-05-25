var defaultLat = 59.332296;
var defaultLon = 18.035948;
var lat = defaultLat;
var lng = defaultLon;

window.onload = function(){ 

  document.getElementById("map").addEventListener("click", getLatLong);
  var currentLat = document.getElementById("latitude").value;
  var currentLon = document.getElementById("longitude").value;

  if(!!currentLat) {
    var lat = Number(currentLat);
  } else {
    var lat = defaultLat;
  }

  if (!!currentLon) {
    var lng = Number(currentLon);
  } else {
    var lng = defaultLon;
  }

  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        disableDefaultUI: true,
        center: {lat: lat, lng: lng},
        maxZoom: 18,
        minZoom: 10,
        oom: 14,

        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){

      myMarker = [{
          "lat": lat,
          "lng": lng,
          "infowindow": "Din aktivitet",
        }];

      Gmaps.markers = handler.addMarkers(myMarker, {draggable: true});
      handler.bounds.extendWith(Gmaps.markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(15);
    }
    
  );
};

function getLatLong() {
  document.getElementById("latitude").value = Gmaps.markers[0].serviceObject.position.lat();
  document.getElementById("longitude").value = Gmaps.markers[0].serviceObject.position.lng();
}
