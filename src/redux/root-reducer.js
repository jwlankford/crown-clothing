import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
<<<<<<< HEAD
  cart: cartReducer,
  directory: directoryReducer,
  shopReducer: shopReducer
});
=======
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
>>>>>>> d85fc174db5e2b65d1925eb24acd49cea5ce0546
