import axios from 'axios';
import { Token } from "../api";

export async function authFetch(url, params?) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.gettoken();

  const logout = () => {
    tokenCtrl.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (tokenCtrl.hasExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await axios.get(url, paramsTemp);
      } catch (error) {
        return error;
      }
    }
  }
}
