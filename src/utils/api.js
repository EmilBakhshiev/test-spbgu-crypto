class Api {
    constructor({ url }) {
      this._url = url;
    }
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    getNotifications() {
        return fetch(`${this._url}notifications`, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(this._checkResponse);
      }}

const config = {
    url: 'api/',
  };
  
  const api = new Api(config);
  
  export default api;
  
