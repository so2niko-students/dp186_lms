import axios from 'axios';

async function getTasks(payload) {
    const { page, groupId } = payload.data;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}?page=${page}&limit=10&groupId=${groupId}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.get(url, headers)
        .then(response => response)
}

async function deleteTask(payload) {
    const { id } = payload;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}/${id}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.delete(url, headers)
        .then(response => response);
}


async function changeTask(payload) {
    const { id, field } = payload.data;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}/${id}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.put(url, JSON.stringify(field), headers)
        .then(response => response)
}

export { getTasks, deleteTask, changeTask };



