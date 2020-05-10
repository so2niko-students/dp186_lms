import axios from 'axios';

async function createGroupApi(request){
  const token = localStorage.getItem('token');
  const url = process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE;
  const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } };

  return axios
    .post(url, request.data, headers)
    .then(response => response.data)
}

export { createGroupApi };