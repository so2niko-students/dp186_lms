import axios from 'axios';

async function updateGroup(request){
    const { groupName, id } = request.data;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}${id}`;
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

async function getOneGroup(request) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}${request.data.groupId}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.get(url, headers)
        .then(response => response)
}

async function loadGroupsData(request) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.get(url, headers)
        .then(response => response)
}

async function deleteStudent(request) {
    const { data: { studentId } } = request;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_DELETE_STUDENT_FROM_GROUP}${studentId}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.delete(url, headers)
        .then(response => response);
}

export { updateGroup, loadGroupsData, deleteStudent, getOneGroup };
