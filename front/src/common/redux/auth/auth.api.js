import axios from 'axios';

async function loginApi(request) {
    const url = process.env.REACT_APP_LOGIN_ROUTE;
    const data = JSON.stringify(request.user);
    const headers = { headers: { 'Content-Type': 'application/json' } };

    return axios.post(url, data, headers)
        .then(response => response)
};

async function changePasswordApi(request) {
    const token = localStorage.getItem('token');
    const teacherURL = process.env.REACT_APP_CHANGE_TEACHER_PASSWORD;
    const studentURL = process.env.REACT_APP_CHANGE_STUDENT_PASSWORD;
    const { oldPassword, newPassword } = request.user
    const headers = {
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    };

    if (request.user.hasOwnProperty('teacherId') && request.user.hasOwnProperty('admin')) {
        const teacherId = +Object.keys(request.user.teacherId)[0];
        const adminURL = `${process.env.REACT_APP_CHANGE_TEACHER_PASSWORD_BY_ADMIN}${teacherId}`;

        return axios.put(adminURL, JSON.stringify({ newPassword }), headers)
            .then(response => response)
    }

    if (request.user.hasOwnProperty('teacher')) {
        return axios.put(teacherURL, JSON.stringify({ oldPassword, newPassword }), headers)
            .then(response => response)
    } else if (request.user.hasOwnProperty('student')) {
        return axios.put(studentURL, JSON.stringify({ oldPassword, newPassword }), headers)
            .then(response => response)
    }
};

export { loginApi, changePasswordApi };