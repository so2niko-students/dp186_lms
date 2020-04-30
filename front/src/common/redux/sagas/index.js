import { fork } from 'redux-saga/effects';
import {watchUserklAuthentication} from './watchers';
import {watchStudentRegistaration} from './watchers';
import {watchTeacherRegistaration} from './watchers';

export default function* startForman() {
  yield fork(watchUserklAuthentication);
  yield fork(watchStudentRegistaration);
  yield fork(watchTeacherRegistaration);
}