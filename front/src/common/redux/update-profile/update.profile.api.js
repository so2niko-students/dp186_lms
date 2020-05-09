import axios from 'axios';

export async function updateProfileApi (request) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const url = `${process.env.REACT_APP_UPDATE_STUDENT_PROFILE}${user.id}`;

    if (user.hasOwnProperty('isAdmin')) {
        url = `${process.env.REACT_APP_UPDATE_TEACHER_PROFILE}${user.id}`;
    } 
    
    const headers = { headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` } };

    return axios
        .put(url, JSON.stringify(request), headers)
        .then(response => response);
}