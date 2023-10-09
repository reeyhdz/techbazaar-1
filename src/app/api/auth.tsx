import axios from 'axios';

const BASE_URL = 'https://techbazaar-api.fly.dev/api/';
const ENDPOINTS = {
  LOGIN: 'users/login',
  REGISTER: 'users/signup',
  ME: 'users/me'
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

  async getMe(){
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjM1ZmYzMGJmNGM4ZDNlOGFiODY5OCIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNjk2ODMxMDA3LCJleHAiOjE2OTY4MzQ2MDd9.4z9d3VdbUYqHUUn2WJWl_7d5vUkX6y1idobxRSnDTyc"
    try {
      const response = await axios.get(`${BASE_URL}${ENDPOINTS.ME}`, { headers: {"Authorization" : `Bearer ${token}`} })
      if (response.status !== 200) throw new Error(response.statusText);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
