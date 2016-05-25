'use strict';

var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

function initMap(initialCenter, initialZoom, staticMarkers, draggableMarker) {
  all_markers = [];
  for (var i = 0; i < staticMarkers.length; i++) {
    if(!!staticMarkers[i].latitude && !!all_camps[i].longitude) {
      marker = {
            "lat": staticMarkers[i].latitude,
            "lng": staticMarkers[i].longitude,
            "picture": {
              "url": icon,
              "width":  32,
              "height": 32
            },
            "infowindow": staticMarkers[i].name,
          };
      all_markers.push(marker);
    }
  }

  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
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
      console.log(this);
      markers = handler.addMarkers(all_markers);
      handler.bounds.extendWith(markers);
      handler.getMap().setCenter(new google.maps.LatLng(initialCenter.lat, initialCenter.lng));
      handler.getMap().setZoom(initialZoom);

      if(!!draggableMarker) {
        Gmaps.markers = handler.addMarkers(myMarker, {draggable: true});
        google.maps.event.addListener(Gmaps.markers[0].serviceObject, 'dragend', getLatLong);
      }
    }
  );
};

function getLatLong(){
  document.getElementById("latitude").value = Gmaps.markers[0].serviceObject.position.lat();
  document.getElementById("longitude").value = Gmaps.markers[0].serviceObject.position.lng();
};
