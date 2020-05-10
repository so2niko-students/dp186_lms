import axios from 'axios';

export async function updateProfileApi (data) {
    console.log(data)
    
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    const studentURL = `${process.env.REACT_APP_UPDATE_STUDENT_PROFILE}${user.id}`;
    const teacherURL = `${process.env.REACT_APP_UPDATE_TEACHER_PROFILE}${user.id}`;
    
    const headers = { headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` }
    };

    if (user.isAdmin) {
        return axios
        .put(teacherURL, data.user, headers)
        .then(response => response.data);
    } else {
        return axios
        .put(studentURL, data.user, headers)
        .then(response => response.data);
    }
}
