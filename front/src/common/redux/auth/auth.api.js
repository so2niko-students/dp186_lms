import axios from 'axios';

const url = 'http://127.0.0.1:5000/auth/login';
const headers = { headers: { 'Content-Type': 'application/json' } };

async function loginApi(request) {
    return axios.post(url, JSON.stringify(request.user), headers)
        .then(response => response)
};
export { loginApi };