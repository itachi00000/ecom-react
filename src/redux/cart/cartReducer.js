import CartActionTypes from './CartActionTypes';

const INITIAL_STATE = {
  hidden: true
};

export default function cartReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
}