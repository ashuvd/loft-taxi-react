import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from '../constants/mapboxToken.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import drawRoute from '../scripts/drawRoute';
import { useSelector, useDispatch } from 'react-redux';
import { getAddresses, getCoordinates, fetchAddressListRequest, fetchRouteRequest } from '../store/modules/address';

const MapboxLanguage = require('@mapbox/mapbox-gl-language');
mapboxgl.accessToken = mapboxToken;

const MapPage = () => {
  let mapContainer;
  let map;
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const addresses = useSelector(getAddresses);
  const coordinates = useSelector(getCoordinates);
  const dispatch = useDispatch();

  const handleChangeFrom = event => {
    setFrom(event.target.value);
  };
  const handleChangeTo = event => {
    setTo(event.target.value);
  };

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [16.05, 48],
      zoom: 2.9
    });
    map.addControl(new MapboxLanguage({ defaultLanguage: 'ru' }));
    map.on('load', () => {
      dispatch(fetchAddressListRequest());
      if (coordinates.length) {
        drawRoute(map, coordinates);
      }
    })
    return () => {
      console.log('map')
      map.remove();
    };
  }, [coordinates])

  const callTaxi = (e) => {
    e.preventDefault();
    dispatch(fetchRouteRequest({from, to}));
  }

  return (
    <div className="mapwrapper">
      <div className="container">
        <form onSubmit={callTaxi} className="formmap">
          <FormControl className="formmap__control">
            <InputLabel id="formmap__label1">Откуда</InputLabel>
            <Select
              labelId="formmap__label1"
              id="demo-simple-select"
              value={from}
              onChange={handleChangeFrom}
            >
              {addresses.map(address => (
                <MenuItem key={address} value={address}>{address}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="formmap__control">
            <InputLabel id="formmap__label2">Куда</InputLabel>
            <Select
              labelId="formmap__label2"
              id="demo-simple-select"
              value={to}
              onChange={handleChangeTo}
            >
              {addresses.map(address => (
                <MenuItem key={address} value={address}>{address}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="form__row">
            <button type="submit" className="formmap__button button">Вызвать такси</button>
          </div>
        </form>
      </div>
      <div className="map" ref={el => mapContainer = el} />;
    </div>
  )
}

export default MapPage;