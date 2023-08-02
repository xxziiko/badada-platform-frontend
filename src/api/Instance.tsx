import axios from 'axios';

const AxiosInstance = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      console.log(error);
      window.location.href = '/error';
    }

    return Promise.reject(error.response);
  },
);

export default AxiosInstance;
