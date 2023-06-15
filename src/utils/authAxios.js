import axios from 'axios';

export default function authAxios() {
  return axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    withCredentials: true,
    headers: {
      'fetch-api-key':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzgzMDU2MTF9.Ky49nXH6qgHJQ0CBsZGYsP7_Is2am3u5j3RAdEl457s',
    },
  });
}