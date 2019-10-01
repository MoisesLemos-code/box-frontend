import axios from 'axios';

const api = axios.create({
  baseURL: 'https://box-back-react.herokuapp.com',

});

export default api;