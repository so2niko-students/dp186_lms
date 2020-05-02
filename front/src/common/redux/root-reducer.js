import { combineReducers } from 'redux';
import { login } from './auth/auth.reducer';

const rootReducer = combineReducers({ login });

export default rootReducer;