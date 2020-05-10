import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';
import { teachersReducer } from './teachers/teachers.reducer';
import { setPassword } from './set-password/set.password.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groupList, teachersReducer, setPassword, changePassword });

export default rootReducer;
