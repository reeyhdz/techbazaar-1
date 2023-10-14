import axios from 'axios';

const BASE_URL = 'https://techbazaar-api.fly.dev/api/products';

export class Product {
  async getAllProducts(){
    try {
      const response = await axios.get(`${BASE_URL}`)
      if (response.status !== 200) throw new Error(response.statusText);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
