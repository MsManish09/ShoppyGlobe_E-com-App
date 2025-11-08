
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'

import userReducer from './user/userSlice'

// Create the store
const store = configureStore({
  reducer: {
    // counter: counterReducer, // we can have many slices here
    products: productsReducer,
    cart: cartReducer,
    user: userReducer
  },
});

export default store;
