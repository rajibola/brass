import Axios, {AxiosRequestConfig, Method} from 'axios';
import {ENV} from 'utils';

/**
 * Utility that calls the backend api service
 * @param {String} url: /path/to/api
 * @param {String} type: GET, POST, PUT, PATCH, DELETE
 * @param data
 * @param {Object} headers: { 'Content-Type': '' }
 * @returns {Promise<data>}
 */

export const apiService = (
  url: String,
  type: Method,
  data?: any,
  headers?: any,
) => {
  if (!url || typeof url !== 'string') {
    throw new Error('Please pass a string url to this function: /path/to/api');
  }
  if (!type || typeof type !== 'string') {
    throw new Error(
      'Please add string api request type: GET, POST, PUT, PATCH, DELETE',
    );
  }
  const headerContent = () => {
    if (headers) {
      if (headers['Content-Type']) {
        return headers['Content-Type'];
      }
      return 'application/json';
    }
    return 'application/json';
  };

  const header = {
    'Content-Type': headerContent(),
    Authorization: `Bearer ${ENV.SECRET_KEY}`,
    ...headers,
  };

  const config: AxiosRequestConfig = {
    method: type,
    url: ENV.BASE_URL + url,
    data,
    headers: header,
  };

  return new Promise((resolve, reject) => {
    Axios(config)
      .then(res => {
        resolve(res.data.data || res);
        console.log({res});
      })
      .catch(error => {
        if (error && !error.response) {
          throw new Error('Could not connect to the server');
        }
        reject(error.response.data);
      });
  });
};

export default {
  post: async (url: string, data: any, options?: any) =>
    apiService(url, 'POST', data, options),
  get: async (url: string) => apiService(url, 'GET'),
};
