import { UserActionTypes } from './UserActionTypes';

export default function setCurrentUser(user) {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
}
