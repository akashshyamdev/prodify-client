import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: 'http://localhost:5000/api',
});

export default axios;
