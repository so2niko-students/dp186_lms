export const STUDENT = 'student';
export const SUPERADMIN = 'superAdmin';
export const MENTOR = 'mentor';

const checkUserStatus = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.isAdmin !== undefined){
        return user.isAdmin ? SUPERADMIN : MENTOR;
    }
    return STUDENT;
};

export default checkUserStatus;
