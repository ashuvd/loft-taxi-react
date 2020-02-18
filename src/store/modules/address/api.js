import axios from 'axios';

export function getAddressList() {
  return axios.get('addressList');
};

export function getCoordinates(from, to) {
  return axios.get(`route?address1=${from}&address2=${to}`);
};