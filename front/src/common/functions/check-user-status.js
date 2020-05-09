const checkUserStatus = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.hasOwnProperty('isAdmin')){
        return user.isAdmin ? 'superAdmin' : 'mentor';
    }
    return 'student';
};

export default checkUserStatus;
