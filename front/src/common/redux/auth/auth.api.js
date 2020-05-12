import axios from 'axios';

async function loginApi(request) {
    const url = process.env.REACT_APP_LOGIN_ROUTE;
    const data = JSON.stringify(request.user);
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios.post(url, data, headers)
        .then(response => response.data)
};

async function changePasswordApi(data, url) {
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    };

    return axios.put(url, JSON.stringify(data), headers)
        .then(response => response.data)
};

export { loginApi, changePasswordApi };