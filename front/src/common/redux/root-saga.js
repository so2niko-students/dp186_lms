import { fork } from 'redux-saga/effects';
import { rootSaga } from './auth/auth.saga';

export default function* startForman() {
    yield fork(rootSaga);
}