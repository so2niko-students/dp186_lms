import axios from 'axios';

export async function forgotPassswordApi (data) {
    const url = `${process.env.REACT_APP_FORGOT_PASSWORD_ROUTE}`;
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios
        .post(url, data, headers)
        .then(response => response.data)
}
