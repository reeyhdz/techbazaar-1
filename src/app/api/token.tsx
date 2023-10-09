export class Token {
  settoken(token) {
    localStorage.setItem('SessionToken', token);
  }
}
