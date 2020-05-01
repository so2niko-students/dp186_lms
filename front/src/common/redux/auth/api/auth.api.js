import axios from 'axios';

async function loginApi(request) {
    const url = 'http://127.0.0.1:5000/auth/login';
    const data = JSON.stringify(request.user);
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios.post(url, data, headers)
        .then(response => response)

};
export { loginApi };