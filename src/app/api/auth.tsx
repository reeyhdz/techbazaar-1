import axios from 'axios';

const BASE_URL = 'https://techbazaar-api.fly.dev/api/';
const ENDPOINTS = {
  LOGIN: 'users/login',
  REGISTER: 'users/signup',
}

export class Auth {
  async login(data){
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, data)
      if (response.status !== 200) throw new Error(response.statusText);
      return response;

    } catch (error) {
      throw new Error(error.message);
    }
  }
  async signUp(data){
    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.REGISTER}`, data)
      if (response.status !== 200) throw new Error(response.statusText);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
