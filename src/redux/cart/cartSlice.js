
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[] // cart items
    },

    reducers:{
    /* 
        // add to cart reducer 
        addToCart: (state, action)=>{
            const newItem = action.payload
            const exists =  state.items.find(p=> p.id == newItem.id)

            // add new item to cart, if it doesnot already exist
            if(!exists){
                state.items.push(newItem)
            }

            // else pop a alert
            else{
                alert(`${newItem.title} already exists...`)
            }
        },
    */
        // get cart details form the DB
        setCartDetailsFromDB: (state, action)=>{
            state.items = action.payload
        },

        // remove from cart fn
        removeFromCart: (state, action)=>{
            const id = action.payload
            state.items = state.items.filter(p=> p.id != id)
        },

        // clear / buy all cart fn
        clearCart: (state) =>{
            state.items = [] // empty the items array
        }
    }
})


export const { setCartDetailsFromDB, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer