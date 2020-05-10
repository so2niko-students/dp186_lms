import {UPDATE_USER_PROFILE} from './types';

export const updateUserProfileAction = (user) => ({
    type: UPDATE_USER_PROFILE,
    user
    
});
// export const changeSuccessPasswordAction = (isSuccess) => ({
//     type: CHANGE_PASSWORD_STATE,
//     isSuccess
// });