import { combineReducers } from 'redux';
import { studentsReducer } from './students/students.reducer';
import { login, changePassword } from './auth/auth.reducer';
import { groupList } from './groups/groups.reducer';
import { teachersReducer } from './teachers/teachers.reducer'; 

<<<<<<< HEAD
const rootReducer = combineReducers({ login, studentsReducer, groupList, changePassword });
=======
const rootReducer = combineReducers({ login, studentsReducer, groupList, teachersReducer });
>>>>>>> 0028aee66aaabc3558e613f256b853f4f3a1cfcc

export default rootReducer;
