

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products details from the api
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // fetch api data
    const response = await axios.get('http://localhost:8080/products') // new fetch api -> fetches from mongodb atlas.
    
    console.log('redux product slice, products api fetch from atlas: ', response)

    // extra products from response
    const products = response.data.products;

    // extract all unique categories
    const uniqueCategories = [...new Set(products.map((p) => p.category))];

    // return products and uniqueCategories
    return { products, uniqueCategories };
  }
)

// create products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],          // store all products
    categories: [],      // unique categories
    status: 'idle',      // idle | loading | succeeded | failed
    error: null,         // stores error message if API fails
  },

//   create reduers -> since there wont be any modifications to the slice, no reducers.
  reducers: {},

// to handle fetching stages.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { 
        state.status = 'loading';  // api data is still being fetched
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'; // when succeds
        state.items = action.payload.products; // update the items array
        state.categories = action.payload.uniqueCategories;  // update uniquecategories array.
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'; // if api fetch fails
        state.error = action.error.message;
      })
  },
})

// export product slice.
export default productsSlice.reducer;
