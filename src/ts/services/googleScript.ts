import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://script.google.com/macros/s/AKfycbyGRfPfalXnputQtGhtYeYl308hV7JiZm8isAdIadQfA1dxA4-4/exec',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 10000,
});

const googleScript = {
  send: (data: any) => axiosInstance.post('', data),
};

export default googleScript;
