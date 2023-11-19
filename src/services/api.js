import axios from 'axios';
import {store} from '../store';

export const urls = {
  development: 'http://localhost:3001',
  production: 'https://app.shippervip.com.br',
};

const api = axios.create({
  baseURL: __DEV__ ? urls.development : urls.production,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    const {auth} = store.getState();

    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
