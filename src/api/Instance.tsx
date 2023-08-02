import axios from 'axios';

export const BASE_URL = 'http://43.201.71.59:30088';

// TODO: AxiosInstance라고 이름 수정하면 어떨까?

const Instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Referer: 'http://43.201.71.59:30088',
    Origin: 'http://43.201.71.59:30088',
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
    console.log(error);
    // if (!error.response) window.location.href = '/error';
    // return Promise.reject(error.response);
  },
);

export default Instance;
