import axios from 'axios';

async function registerTeacherApi(teacher) {
  const url = process.env.REACT_APP_TEACHERS_REG_ROUT;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .post(url, JSON.stringify(teacher.payload), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
}

async function updateTeacherApi(teacher) {
  const url = `${process.env.REACT_APP_TEACHERS_UPDATE_ROUT}${teacher.payload.id}`;
  delete teacher.payload.id;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }
  console.log(teacher.payload);
  return axios
    .put(url, JSON.stringify(teacher.payload), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
}

async function deleteTeacherApi(teacher) {
  const url = `${process.env.REACT_APP_TEACHERS_DELETE_ROUT}${teacher.id}`;
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('No token found');
    return;
  }
  console.log(token);
  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
}

async function loadTeachersApi(action) {
  const url = `${process.env.REACT_APP_TEACHERS_LOAD_ROUT}?page=${action.querys.page}&limit=10`;
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
