import axios from 'axios';

async function registerStudentApi(student) {
  const url = 'http://127.0.0.1:5000/students';
  const data = JSON.stringify(student.payload);

  return axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response);
}

export { registerStudentApi };
