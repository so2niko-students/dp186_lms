// import axios from 'axios';
export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'http://127.0.0.1:5000/auth/login';
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
    // console.log('SERVICE: BODY FETCH')
    // console.log(request.user)

    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {

        // console.log('RESPONSE FROM FETCH')
        // console.log(response)

        return response.json();
      })
      .then(json => {
        return json;
      });
  };