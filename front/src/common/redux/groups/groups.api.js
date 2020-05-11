import axios from 'axios';

async function createGroupApi(request){
  const token = localStorage.getItem('token');
  const url = process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE;
  const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } };

  return axios
    .post(url, request.data.groupName, headers)
    .then(response => response.data)
}

function updateGroup(requestData){
    const { groupName, id } = requestData;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}${id}`;
    const data = { groupName };
    if (requestData.avatar.img) {
        data.avatar = requestData.avatar;
    }
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    };
    return axios.put(url, data, headers)
        .then(response => response.data)
}

function getOneGroup(requestData) {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}${requestData.groupId}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.get(url, headers)
        .then(response => response.data)
}

function loadGroupsData() {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_GROUPS_LOAD_AND_UPDATE}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.get(url, headers)
        .then(response => response.data)
}

function deleteStudent(requestData) {
    const { studentId } = requestData;
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_DELETE_STUDENT_FROM_GROUP}${studentId}`;
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}};
    return axios.delete(url, headers)
        .then(response => response.data);
}

export { updateGroup, loadGroupsData, deleteStudent, getOneGroup, createGroupApi };
