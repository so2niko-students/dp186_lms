async function teacherRegistrationService(teacher) {
    const url = 'http://127.0.0.1:5000/teachers';
    const body = JSON.stringify(teacher.payload);
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      console.log('No token found')
      return
    }

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body
    }
    const response = await fetch(url, options);

    const json = await response.json();

    console.log(json);
    const testObj = {json, ok: response.ok, isJoi: json.error.isJoi};
    console.log(testObj)
    return testObj;
}

export {teacherRegistrationService};
