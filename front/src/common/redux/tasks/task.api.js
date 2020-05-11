import axios from 'axios';

async function getTasks({ page, groupId }) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}?page=${page}&limit=10&groupId=${groupId}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.get(url, headers)
        .then(response => response.data)
}

async function deleteTask(id) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}/${id}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.delete(url, headers)
        .then(response => response.data);
}


async function changeTask({ id, field }) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_TASKS}/${id}`;
    const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

    return axios.put(url, JSON.stringify(field), headers)
        .then(response => response.data)
}

export { getTasks, deleteTask, changeTask };



