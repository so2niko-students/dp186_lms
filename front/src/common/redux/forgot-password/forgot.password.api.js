import axios from 'axios';

export async function forgotPassswordApi (request) {
    const url = `${process.env.REACT_APP_FORGOT_PASSWORD_ROUTE}`;
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios
        .post(url, request.data, headers)
        .then(response => response)
}
