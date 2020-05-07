export function validateGroup(_, value) {
    const engRegexp = /^[A-Z0-9\-_ ]{1,100}$/ig;
    if (engRegexp.test(value)) {
        return Promise.resolve();
    } else {
        return Promise.reject('Not valid group name');
    }
}