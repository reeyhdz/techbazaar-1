import axios from 'axios';

const BASE_URL = 'https://techbazaar-api.fly.dev/api/users/login';

export class Auth {
  async login(data){
    try {
      const response = await axios.post(BASE_URL, data)
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
