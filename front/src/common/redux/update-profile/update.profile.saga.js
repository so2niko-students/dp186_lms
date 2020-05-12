import { takeEvery, call, put, all } from 'redux-saga/effects';
import { updateProfileApi } from './update.profile.api';
import * as types from './types';
import { showNotification } from '../../notifications/notifications';

export function* updateSaga(payload) {
    try {
        yield call(updateProfileApi, payload);
        yield put({ type: types.CHANGE_REDIRECT_STATE});
        showNotification(
            'Successfully updated',
            'Your profile has been successfully updated',
            'success'
          );
    } catch (error) {
        showNotification('Update profile error', error.response.data.error, 'error');
    }
}

export function* userUpdateProfileSaga() {
    yield all([
        takeEvery(types.UPDATE_USER_PROFILE, updateSaga)
    ])
}