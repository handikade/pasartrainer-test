import axios from 'axios';

export default axios.create({
  baseURL: "https://api.goapp.co.id/v1",
  headers: { 'X-API-Key': 43027215024200 }
});