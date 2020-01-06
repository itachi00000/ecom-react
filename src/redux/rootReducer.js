import { combineReducers } from 'redux';

// reducers
import userReducer from './user/userReducer';

export default combineReducers({
  user: userReducer
});
