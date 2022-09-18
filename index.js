require('./bootstrap');
const axios = require('axios');

class Package {
  static REST_API_URL;
  static USERNAME;
  static PASSWORD;

  constructor(params = {}) {
    const { restApiUrl, username, password } = params;
    this.init({ restApiUrl, username, password });
  }

  init(params = {}) {
    const { restApiUrl, username, password } = params;

    Package.REST_API_URL = restApiUrl || '';
    Package.USERNAME = username || '';
    Package.PASSWORD = password || '';

    axios.interceptors.request.use(function (config) {

      return {
        ...config,
        auth: {
          username: Package.USERNAME,
          password: Package.PASSWORD
        }
      };
    }, function (error) {
      return Promise.reject(error);
    });
  }

  query({ method = 'GET', partialUrl, queryParams = {}, axiosParams = {} }) {
    const config = {
      method,
      url: `${Package.REST_API_URL}/${partialUrl}`,
      params: queryParams,
      ...axiosParams
    }

    return axios(config);
  }
}

module.exports = Package;