var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.017327, 38.883127]
    },
    properties: {
      title: 'Nasa',
      description: '300 E St SW, Washington, DC 20546, USA'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.328277, 33.920709]
    },
    properties: {
      title: 'Spacex',
      description: 'Rocket Rd, Hawthorne, CA 90250, USA'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [37.630449, 55.783262]
    },
    properties: {
      title: 'Roscosmos',
      description: 'Ulitsa Shchepkina, 42, Moskva, 129110, Russia'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.766702, 35.698668]
    },
    properties: {
      title: 'JAXA',
      description: '4-chōme-4-６ Kanda Surugadai, Chiyoda City, Tōkyō-to 101-8008, Japan'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});

