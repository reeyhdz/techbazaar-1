import { authFetch } from "../utils";
const BASE_URL = 'https://techbazaar-api.fly.dev/api/';
const ENDPOINTS = {
  ME: 'users/',
}
const USER_ID = "65235ff30bf4c8d3e8ab8698"
export class User {
  async getMe() {
    try {
      const url = `${BASE_URL}${ENDPOINTS.ME}${USER_ID}`;
      const response = await authFetch(url);
      if (response.status !== 200) throw response;
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
