import axios from 'axios';

async function updateGroup(request){
    const { groupName, id } = request.data;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_UPDATE_GROUP}${id}`;
    const data = { groupName };
    if (request.data.avatar.img) {
        data.avatar = request.data.avatar;
    }
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    };
    return axios.put(url, data, headers)
        .then(response => response)
}

export { updateGroup };
