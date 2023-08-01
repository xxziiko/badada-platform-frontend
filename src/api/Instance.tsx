import axios from 'axios';

const BASE_URL = 'http://43.201.71.59:30088';

const Instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

Instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

Instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) window.location.href = '/error';

    return Promise.reject(error.response);
  },
);

export default Instance;
