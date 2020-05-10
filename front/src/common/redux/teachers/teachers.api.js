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

export { registerTeacherApi };
