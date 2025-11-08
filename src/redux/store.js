
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice'

// Create the store
const store = configureStore({
  reducer: {
    // counter: counterReducer, // we can have many slices here
    products: productsReducer
  },
});

export default store;
