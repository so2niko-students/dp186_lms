import axios from 'axios';

const options = {
  baseUrl: process.env.REACT_APP_TEACHERS_LOAD_ROUT,
  headers: {
    'Content-Type': 'application/json',
  },
};

function registerTeacherApi(teacher) {
  const url = process.env.REACT_APP_TEACHERS_REG_ROUTE;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .post(url, JSON.stringify(teacher), {
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    })
    .then((response) => response);
}

function updateTeacherApi(teacher) {
  console.log(teacher)
  const url = `${process.env.REACT_APP_TEACHERS_UPDATE_ROUTE}${teacher.id}`;
  delete teacher.id;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .put(url, JSON.stringify(teacher), {
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    })
    .then((response) => response);
}

function deleteTeacherApi(teacher) {
  const url = `${process.env.REACT_APP_TEACHERS_DELETE_ROUTE}${teacher.id}`;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .delete(url, {
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    })
    .then((response) => response);
}

function loadTeachersApi(data) {
  const url = `${process.env.REACT_APP_TEACHERS_LOAD_ROUTE}?page=${data.page}&limit=10`;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
}

export { registerTeacherApi, updateTeacherApi, loadTeachersApi, deleteTeacherApi };
