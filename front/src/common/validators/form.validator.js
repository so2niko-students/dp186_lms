export function validateEng(_, value) {
  const engRegexp = /^[A-Z]{1}([a-z]{1,})?$/;
  if (engRegexp.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject('Not valid name or surname in English');
  }
}

export function validateUkr(_, value) {
  const ukrRegexp = /^[А-ЯІЇЄ]{1}([а-яіїє]{1,})?$/;
  const excludeRuLetters = /^[^ЫЭЪЁ]{1}([^ыэъё]{1,})?$/;

  if (ukrRegexp.test(value) && excludeRuLetters.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject('Not valid name or surname in Ukrainian');
  }
}

export function validatePhoneNumber(_, value) {
  const phoneNumberRegexp = /\+380\d{9}/;

  if (phoneNumberRegexp.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject('Not valid phone number');
  }
}
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
