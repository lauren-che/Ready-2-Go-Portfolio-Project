import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MAPBOX_ACCESS_TOKEN from '@src/lib/mapbox';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const AddressAutofill = () => {
  const geocoderContainerRef = useRef(null);

  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: 'us',
      types: 'address',
      proximity: {
        longitude: -81.686,
        latitude: 41.433,
      }, // Cuyahoga County coordinates
      mapboxgl: mapboxgl,
      marker: false,
      minLength: 3, // Minimum characters to start searching
      // theme: 'dark', // Apply dark theme
    });

    if (geocoderContainerRef.current) {
      geocoder.addTo(geocoderContainerRef.current);
    }

    return () => {
      geocoder.clear();
    };
  }, []);

  return (
    <div>
      <div ref={geocoderContainerRef} />
    </div>
  );
};

export default AddressAutofill;