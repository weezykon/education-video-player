import axios from "axios";

const api = axios.create({
  baseURL: 'https://take-home-assessment-423502.uc.r.appspot.com/',
  withCredentials: true,
});

export default api;