export function validateEmail(_, value) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(value)) {
        return Promise.resolve();
    } else {
        return Promise.reject('Email format must be like example@gmail.com');
    }
}

export function validatePassword(_, value) {
    const passwordRegex = /[a-zA-Z\d]{6,}$/;

    if (passwordRegex.test(value)) {
        return Promise.resolve();
    } else {
        return Promise.reject('Password must be longer than 6 symbols');
    }
}