import axios from 'axios';
import config from './config';

export const callApi = call => {
    let defaultHeaders = {};
    let {
        endpoint,
        method = 'GET',
        params = {},
        data = {},
        headers = {},
        dataArray = null,
        formData = null,
        log = {},
        showRequestLog = true,
        showJSON = false,
        useGetParams = false,
        title = '',
      } = call;

      const url = config.url_dev + endpoint;

      return axios(url,{
        method,
        params,
        data,
      });
};