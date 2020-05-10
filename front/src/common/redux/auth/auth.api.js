import axios from 'axios';

async function loginApi(request) {
    const url = process.env.REACT_APP_LOGIN_ROUTE;
    const data = JSON.stringify(request.user);
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios.post(url, data, headers)
       .then(response => response)
};
export { loginApi };