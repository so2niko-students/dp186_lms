import axios from 'axios';

async function createGroupApi(request){
  const token = localStorage.getItem('token');
  const url = process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE;
  const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000/groups/' } };

  return axios
    .post(url, request.data.groupName, headers)
    .then(response => response.data)
}

export { createGroupApi };