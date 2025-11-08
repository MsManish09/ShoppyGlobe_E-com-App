
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        name: 'user',
        password: '',
        isLoggedIn: false,
        previouslyOrdredItems:[] // ordered  items
    },

    reducers:{
        // set username
        setName: (state, action)=>{
            state.name = action.payload
        },

        // set password
        setPassword: (state, action)=>{
            state.password = action.payload
        },

        // update ordered item list
        updateOrderedItemsList: (state, action) =>{
            const newOrder = action.payload
            // const previousOrders = [...state.previouslyOrdredItems]
            state.previouslyOrdredItems.push(...newOrder)
        },

        // log user inn, when login btn is pressed
        login: (state)=>{
            state.isLoggedIn = true
        }
    }
})


export const { setName, setPassword, updateOrderedItemsList, login } = userSlice.actions
export default userSlice.reducer