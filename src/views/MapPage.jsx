import React, { useState, useEffect, createRef } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from '../constants/mapboxToken.js';
const MapboxLanguage = require('@mapbox/mapbox-gl-language');
mapboxgl.accessToken = mapboxToken;

const MapPage = () => {
  let mapContainer = null;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [16.05, 48],
      zoom: 2.9
    });
    map.addControl(new MapboxLanguage({  defaultLanguage: 'ru'}));
    return () => {
      map.remove();
    }
  }, [])

  return <div className="map" ref={el => mapContainer = el} />;
}

export default MapPage;