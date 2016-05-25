var defaultLat = 59.332296;
var defaultLon = 18.035948;
var lat = defaultLat;
var lng = defaultLon;

window.onload = function(){ 

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
        center: {lat: lat, lng: lng},
        maxZoom: 18,
        minZoom: 10,

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
      google.maps.event.addListener(Gmaps.markers[0].serviceObject, 'dragend', getLatLong);
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
