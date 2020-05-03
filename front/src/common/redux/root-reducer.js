import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer'; 
import { login } from './auth/auth.reducer';
import { setPassword } from './set-password/set.password.reducer';

const rootReducer = combineReducers({ login, studentsReducer, setPassword });

export default rootReducer;
