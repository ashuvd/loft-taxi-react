import axios from 'axios';

export function postAuth(payload) {
  return axios.post('auth', payload);
};

export function postRegister(payload) {
  return axios.post('register', payload);
};

export function postCard(payload) {
  return axios.post('card', payload);
};

export function getCard(token) {
  return axios.get(`card?token=${token}`);
};