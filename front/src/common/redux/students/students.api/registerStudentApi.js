import axios from 'axios';

async function registerStudentApi(student) {
  const url = 'http://127.0.0.1:5000/students';
  const data = JSON.stringify(student.payload);
  // const response = await axios.post({
  //   url : 'http://127.0.0.1:5000/students',
  //   method: 'post',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  //   data,
  // });

  return axios
    .post(
      url,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => response);

  // const response = await axios.get({
  //   url : 'https://randomuser.me/api/',
  // });

  // console.log(response);

  // const json = await response.json();

  // return { json, ok: response.ok, isJoi: json.isJoi };
}

// async function registerStudentApi(student) {
//     const url = 'http://127.0.0.1:5000/students';
//     const body = JSON.stringify(student.payload);
//     const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body
//     }
//     const response = await fetch(url, options);

//     const json = await response.json();

//     return {json, ok: response.ok, isJoi: json.isJoi};
// }

export { registerStudentApi };
