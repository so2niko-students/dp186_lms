import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';

const rootReducer = combineReducers({ login, studentsReducer, changePassword });

export default rootReducer;
