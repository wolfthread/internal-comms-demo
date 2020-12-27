import { combineReducers } from 'redux';
import authReducer from './authReducers';
import userReducer from './userReducers';
import departmentReducer from './departmentReducers';
import ticketReducer from './ticketReducers';

export default combineReducers({
  auth: authReducer,
  users: userReducer,
  departments: departmentReducer,
  tickets: ticketReducer,
});
