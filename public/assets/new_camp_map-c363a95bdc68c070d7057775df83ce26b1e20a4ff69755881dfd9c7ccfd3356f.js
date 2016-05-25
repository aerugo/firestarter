var defaultLat = 59.332296;
var defaultLon = 18.035948;
var lat = defaultLat;
var lng = defaultLon;

window.onload = function(){ 

  all_camps = JSON.parse(localStorage.getItem('all_camps'));
  all_markers = [];
  for (var i = 0; i < all_camps.length; i++) {
    marker = {
          "lat": all_camps[i].latitude,
          "lng": all_camps[i].longitude,
          "picture": {
            "url": "http://icons.iconarchive.com/icons/flaticonmaker/flat-style/32/flag-icon.png",
            "width":  32,
            "height": 32
          },
          "infowindow": all_camps[i].name,
        };
    all_markers.push(marker);
  }

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
      markers = all_markers;

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
