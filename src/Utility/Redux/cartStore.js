import {configureStore}  from '@reduxjs/toolkit'
import CartReducer from './cartSlice.js'
const cartStore = configureStore({
  reducer:{
    cart:CartReducer
  }
})
export default cartStore;