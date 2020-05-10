import axios from 'axios';

async function createGroupApi(group){
  const url = process.env.REACT_APP_CREATE_GROUP_ROUT;
  const data = JSON.stringify(group);
  const headers = { headers: { 'Content-Type': 'application/json' } };

	return axios
				.post(url, data, headers)
				.then(response => response)
				.catch(err => {
          return  new Error('Something wrong', err)
        })
}

export { createGroupApi };