import axios from 'axios';

async function registerTeacherApi(teacher) {
  const url = 'http://127.0.0.1:5000/teachers';
  const data = JSON.stringify(teacher.payload);
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    console.log('No token found');
    return;
  }

  return axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
}

export { registerTeacherApi };
