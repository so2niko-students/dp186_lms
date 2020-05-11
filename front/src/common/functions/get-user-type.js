export const STUDENT = 'student';
export const SUPERADMIN = 'superAdmin';
export const MENTOR = 'mentor';
export const UNAUTHORIZED = 'unauthorized';

const getUserType = () => {
    // if we have user key without data in local storage
    if (!localStorage.getItem('user') ){
        return UNAUTHORIZED;
    }
    const user = JSON.parse(localStorage.getItem('user')) || {};
    // if we dont have user key in local storage
    if (!user.email) {
        return UNAUTHORIZED;
    }
    // if we have user key with data in local storage
    if (user.isAdmin !== undefined) {
        return user.isAdmin ? SUPERADMIN : MENTOR;
    }
    return STUDENT;
};

export default getUserType;
