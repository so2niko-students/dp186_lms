import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';

const rootReducer = combineReducers({ login, studentsReducer, groupList, changePassword });

export default rootReducer;
