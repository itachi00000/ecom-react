import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import userReducer from './user/user.reducers';
import cartReducer from './cart/cart.reducers';
import shopReducer from './shop/shop.reducers';
import directoryReducer from './directory/directory.reducers';

// save to local storage?? (using redux-persist)
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer
});

// return rootReducer??
export default persistReducer(persistConfig, rootReducer);
