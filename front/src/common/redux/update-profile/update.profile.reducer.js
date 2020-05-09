import * as types from './types';

const initialState = {
    isUpdatedProfile: false,
    errorMessage: ''
}

export function updateUserProfile (state = initialState, action) {
    switch(action.type) {
        case types.UPDATE_USER_PROFILE_SUCCESS:
            return {...state, isUpdatedProfile: true, errorMessage: ''};
        case types.UPDATE_USER_PROFILE_ERROR:
            return {...state, isUpdatedProfile: true, errorMessage: 'Profile update is failed'};
        default:
            return state;
    }
}

// const changePasswordState = {
//     isChangedPassword: false,
//     errorMessage: '',
// }

// export function changePassword(state = changePasswordState, action) {
//     switch (action.type) {
//         case types.CHANGE_USER_PASSWORD_SUCCESS:
//             return { ...state, isChangedPassword: true, errorMessage: '' };
//         case types.CHANGE_PASSWORD_STATE:
//             return { ...state, isChangedPassword: false, errorMessage: '' };
//         case types.CHANGE_USER_PASSWORD_ERROR:
//             return { ...state, isChangedPassword: false, errorMessage: 'Password has not been changed' };
//         default:
//             return { ...state };
//     }
// };