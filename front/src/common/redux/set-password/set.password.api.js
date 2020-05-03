import axios from 'axios';

export async function setPassswordApi (request) {
    const url = process.env.REACT_APP_SET_PASSWORD_ROUT;
    const data = JSON.stringify(request.user);
   
    return axios
        .put(url, data, {headers: { 'Content-Type': 'application/json' }})
        .then(response => response)
        .catch(error => console.log(error))
}