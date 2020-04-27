async function studentRegistrationService(student) {
    const url = 'http://127.0.0.1:5000/students';
    const body = JSON.stringify(student.payload);
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
    }
    const response = await fetch(url, options);

    const json = await response.json();

    return {json, ok: response.ok, isJoi: json.isJoi};
}

export {studentRegistrationService};
