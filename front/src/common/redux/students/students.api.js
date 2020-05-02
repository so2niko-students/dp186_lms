import axios from 'axios';

async function registerStudentApi(student) {
  const url = process.env.REACT_APP_STUDENT_REG_ROUT;

  return axios
    .post(url, JSON.stringify(student.payload), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response);
}

export { registerStudentApi };
