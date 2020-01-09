import { UserActionTypes } from './UserActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function setCurrentUser(user) {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
}
