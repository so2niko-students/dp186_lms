import { fork } from 'redux-saga/effects';
import {rootStudentsSaga} from './students/students.sagas/rootStudentsSaga';

export default function* startForman() {
  yield fork(rootStudentsSaga);
}
