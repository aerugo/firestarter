var defaultLat = 59.332296;
var defaultLon = 18.035948;
var lat = defaultLat;
var lng = defaultLon;

window.onload = function(){ 

  document.getElementById("map").addEventListener("click", getLatLong);
  var currentLat = document.getElementById("latitude").value;
  var currentLon = document.getElementById("longitude").value;

  if(!!currentLat) {
    var lat = currentLat;
  } else {
    var lat = defaultLat;
  }

  if (!!currentLon) {
    var lng = currentLon;
  } else {
    var lng = defaultLon;
  }

  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        disableDefaultUI: true,
        center: {lat: lat, lng: lng},
        maxZoom: 18,
        minZoom: 10

        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){
      markers = handler.addMarkers([
        {
          "lat": 59.3336313,
          "lng": 18.0328983,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "one marker!"
        },
        {
          "lat": 59.3311,
          "lng": 18.039049,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "another marker!"
        },
      ]);

      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();

      myMarker = [{
          "lat": lat,
          "lng": lng,
          "infowindow": "added marker!",
          "id": 1,}];

      Gmaps.movableMarker = myMarker.map(function(m) {
        marker = handler.addMarker(m);
        marker.serviceObject.set('id', m.id); // You can add other attributes using set
        marker.serviceObject.set('lat', m.lat);
        marker.serviceObject.set('lng', m.lng);
        marker.serviceObject.set('infowindow', m.infowindow);
        marker.serviceObject.set('draggable', true);
        window.marker = marker;
        return marker;
      });

    }
    
  );
};

function getLatLong() {
  document.getElementById("latitude").value = Gmaps.movableMarker[0].serviceObject.position.lat();
  document.getElementById("longitude").value = Gmaps.movableMarker[0].serviceObject.position.lng();
}
