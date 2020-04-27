async function studentRegistrationService(student) {
    const url = 'http://127.0.0.1:5000/students';
    const body = JSON.stringify(student.payload);
    console.log('Body')
    console.log(body);
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
    }
    const response = await fetch(url, options);

    const json = await response.json();
    console.log(json);

    return {json, ok: response.ok};
}

export {studentRegistrationService};



// export const loginUserService = (request) => {
//     const LOGIN_API_ENDPOINT = 'http://127.0.0.1:5000/auth/login';
//     const parameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(request.user)
//     };
//     // console.log('SERVICE: BODY FETCH')
//     // console.log(request.user)

//     return fetch(LOGIN_API_ENDPOINT, parameters)
//       .then(response => {

//         // console.log('RESPONSE FROM FETCH')
//         // console.log(response)

//         return response.json();
//       })
//       .then(json => {
//         return json;
//       });
//   };