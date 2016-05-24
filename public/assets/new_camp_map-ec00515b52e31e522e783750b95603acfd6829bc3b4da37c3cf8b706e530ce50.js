window.onload = function(){ 
  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        disableDefaultUI: true,
        center: {lat: 59.332296, lng: 18.035948},
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
      userMarker = handler.addMarker(
        {
          "lat": 59.332,
          "lng": 18.035,
          "infowindow": "added marker!",
          "id": "placement",
        },
        {draggable: true}
      );
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    }
  );
};
