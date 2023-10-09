import axios from 'axios';

const BASE_URL = 'https://techbazaar-api.fly.dev/api/';
const ENDPOINTS = {
  LOGIN: 'users/login',
  REGISTER: 'users/signup',
  ME: 'users/',
}
const USER_ID = "65235ff30bf4c8d3e8ab8698"

export class User {
  async getMe(token){
    try {
      const response = await axios.get(`${BASE_URL}${ENDPOINTS.ME}${USER_ID}`, { headers: {"Authorization" : `Bearer ${token}`} })
      if (response.status !== 200) throw new Error(response.statusText);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
