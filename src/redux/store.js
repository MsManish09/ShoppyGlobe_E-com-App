
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'

// Create the store
const store = configureStore({
  reducer: {
    // counter: counterReducer, // we can have many slices here
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
