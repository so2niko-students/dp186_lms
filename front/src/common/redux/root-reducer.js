import { combineReducers } from 'redux';
import { studentRegister } from './students/students.reducers/studentRegistrationReducer'; 

const rootReducer = combineReducers({studentRegister});

export default rootReducer;
