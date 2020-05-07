import axios from 'axios';

export async function setPassswordApi (request) {
    const url = `${process.env.REACT_APP_SET_PASSWORD_ROUT}${request.data.token}`;
    const sentData = JSON.stringify(request.data);
    const headers = { headers: { 'Content-Type': 'application/json' } };
   
    return axios
        .put(url, sentData, headers)
        .then(response => response)
}
