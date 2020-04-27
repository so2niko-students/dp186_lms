// import axios from 'axios';
export const loginUserService = (request) => {
  console.log(request)
    const LOGIN_API_ENDPOINT = 'http://127.0.0.1:5000/auth/login';
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };

    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };