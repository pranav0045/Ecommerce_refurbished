import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
       reducer:{
        product:productSlice, //reeducer for entire array
        cart:cartSlice, //reducer for cart
    }, 
})

export default store;