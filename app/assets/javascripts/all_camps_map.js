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
      markers = handler.addMarkers(all_markers);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();

    }
  );
};