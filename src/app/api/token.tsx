import jwtDecode from "jwt-decode";

export class Token {
  settoken(token) {
    localStorage.setItem('SessionToken', token);
  }
  gettoken() {
    return localStorage.getItem('SessionToken');
  }

  removeToken() {
    localStorage.removeItem('SessionToken');
  }

  hasExpired(token) {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate > expireDate) {
      return true;
    }

    return false;
  }
}
