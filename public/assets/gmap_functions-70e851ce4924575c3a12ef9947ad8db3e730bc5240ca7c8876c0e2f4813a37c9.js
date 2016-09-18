'use strict';

var icon = "/assets/icon-74a9cf32c67549cc6491cc996eb670d628eee995203abc957932b9763d1d074a.png"

function initMap(initialCenter, initialZoom, staticMarkers, draggableMarker) {
  var all_markers = [];
  var marker = {};
  console.log(staticMarkers);
  for (var i = 0; i < staticMarkers.length; i++) {
    if(!!staticMarkers[i].latitude && !!staticMarkers[i].longitude) {
      var url = "<a href='/camps/" + staticMarkers[i].id + "'>" + staticMarkers[i].name + "</a>";
      marker = {
            "lat": staticMarkers[i].latitude,
            "lng": staticMarkers[i].longitude,
            "picture": {
              "url": icon,
              "width":  32,
              "height": 32
            },
            "infowindow": url,
          };
      all_markers.push(marker);
    }
  }

  var handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        center: {lat: lat, lng: lng},
        maxZoom: 18,
        minZoom: 1

        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){
      Gmaps.markers = handler.addMarkers(all_markers);
      handler.bounds.extendWith(Gmaps.markers);
      handler.getMap().setCenter(new google.maps.LatLng(initialCenter.lat, initialCenter.lng));
      handler.getMap().setZoom(initialZoom);

      if(!!draggableMarker) {
        if(!!document.getElementById("latitude").value){
          draggableMarker.lat = document.getElementById("latitude").value
        }
        if(!!document.getElementById("longitude").value){
          draggableMarker.lng = document.getElementById("longitude").value
          var oldMarker = Gmaps.markers.filter(function(m) { return m.serviceObject.position.lat() == draggableMarker.lat; })[0];
          oldMarker.serviceObject.setVisible(false);
        }
        Gmaps.marker = handler.addMarker(draggableMarker, {draggable: true});
        google.maps.event.addListener(Gmaps.marker.serviceObject, 'dragend', getLatLong);
        google.maps.event.addListener(handler.getMap(), 'click', function(event) {
            Gmaps.marker.serviceObject.setPosition({lat: event.lat, lng: event.lng})
            console.log("HEY");
            getLatLong();
            google.maps.event.trigger(map, 'resize');
        });
      }

    }
    
  );
};

function getLatLong(){
  document.getElementById("latitude").value = Gmaps.marker.serviceObject.position.lat();
  document.getElementById("longitude").value = Gmaps.marker.serviceObject.position.lng();
};
