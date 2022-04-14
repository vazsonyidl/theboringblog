import axios from 'axios';

const _axios = axios.create();

_axios.interceptors.request.use((config) => {
  return config;
});

export default _axios;
