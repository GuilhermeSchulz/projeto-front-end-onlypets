import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://onlypetz.herokuapp.com/',
});
