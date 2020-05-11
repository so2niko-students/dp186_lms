import axios from 'axios';

export async function updateProfileApi (data) {
       
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const studentURL = `${process.env.REACT_APP_UPDATE_STUDENT_PROFILE}${user.id}`;
    const teacherURL = `${process.env.REACT_APP_UPDATE_TEACHER_PROFILE}${user.id}`;
    const url = user.isAdmin? teacherURL: studentURL;
    
    const headers = { headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` }
    };

    return axios
        .put(url, data.user, headers)
        .then(response => response.data);
    
}
