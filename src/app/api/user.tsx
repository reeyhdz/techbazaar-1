// import axios from 'axios';
import { authFetch } from "../utils";
import { Token } from "../api";

const BASE_URL = 'https://techbazaar-api.fly.dev/api/';
const ENDPOINTS = {
  ME: 'users/',
}
const USER_ID = "65235ff30bf4c8d3e8ab8698"
const tokenController = new Token();
export class User {
  // async getMe(){
  //   const token = tokenController.gettoken();
  //   try {
  //     const response = await axios.get(`${BASE_URL}${ENDPOINTS.ME}${USER_ID}`, { headers: {"Authorization" : `Bearer ${token}`} })
  //     if (response.status !== 200) throw new Error(response.statusText);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  async getMe() {
    try {
      const url = `${BASE_URL}${ENDPOINTS.ME}${USER_ID}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
