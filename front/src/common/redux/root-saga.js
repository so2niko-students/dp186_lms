import { fork } from 'redux-saga/effects';
import { rootAuthSaga } from './auth/sagas/auth.saga';

export default function* startForman() {
    yield fork(rootAuthSaga);
}