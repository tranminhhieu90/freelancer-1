// import { RootState, store } from 'app/store';
import axios from 'axios';

const baseURL = 'http://167.172.82.100:3000/api';

const Http = axios.create({
  baseURL,
  timeout: 30000,
  timeoutErrorMessage: 'Request Timeout',
});

Http.interceptors.request.use(
  function (config: any) {
    const token = 'some_token';
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    if (process.env.NODE_ENV === 'development') {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  function (response) {
    if (process.env.NODE_ENV === 'development') {
      console.log('SUC Resp: ', response.data);
    }

    return response;
  },
  function (error) {
    if (error.response) {
      if (process.env.NODE_ENV === 'development') {
        console.log('ERR Resp: ', error.response);
      }
      return Promise.reject(error.response);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Err: ', error);
    }

    return Promise.reject(error);
  }
);

export default Http;
