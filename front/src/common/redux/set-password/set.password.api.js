import axios from 'axios';

export async function setPassswordApi (request) {

    const url = `${process.env.REACT_APP_SET_PASSWORD_ROUT}${request.data.token}`;
    const headers = { headers: { 'Content-Type': 'application/json' } };
   
    return axios
        .put(url, request.data, headers)
        .then(response => response)
}
