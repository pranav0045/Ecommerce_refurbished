import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartArray: [],
            subtotal: 0,
            shipping: 0,
            tax: 0,
            total: 0,
        },

        reducers: {

            //this reducer will add the item to the cart array
            addToCartArray(state,action) {
                console.log(action);
                const { id } = action.payload; //outside product id.
                let b = false;
                state.cartArray.map((item) => {
                    if (id === item.id) {
                        b = true;
                    }
                })
                b ? console.log("hello") : state.cartArray.push(action.payload);
       
        
            },


            //this reducer remove the items from cart array.
            deleteCartArrray(state,action) {
                const id = action.payload;
                state.cartArray = state.cartArray.filter((item) => {
                    return id !== item.id;
                })

            },


            //this reducer will increment the quantity of product.
            incrementQuantity(state, action) {
                const { id, price } = action.payload;
                state.cartArray.map((item) => {
                    if (id === item.id) {
                        item.quantity += 1; //increase qty
                        item.price = item.quantity * price;  //increase qty as per the price.
                    }
                })


                
    
            },


            //this reducer will decrement the quantity of product.
            decrementQuantity(state, action) {
                const { id, price } = action.payload;
                state.cartArray.map((item) => {

                    if (id === item.id && item.quantity > 1) {
                        item.quantity -= 1;
                        item.price = item.price - price;

                    }
                })
       
                
            },

            
            //this reducer will calculate pricong of the cart.
             calculatePrice(state) {

                //total price.
                let sum = 0;
                state.cartArray.map((item) => {
                    sum = sum + item.price;
                })

                //will calculate tax as well as the shipping ans total price.
                state.subtotal = sum;
                state.shipping = state.subtotal > 1000 ? 0 : 200;
                state.tax = +(state.subtotal * 0.05).toFixed();
                state.total = state.subtotal + state.shipping + state.tax;

             }


        }
    }
)

export default cartSlice.reducer;
export const { addToCartArray } = cartSlice.actions;
export const { deleteCartArrray } = cartSlice.actions;
export const { incrementQuantity } = cartSlice.actions;
export const { decrementQuantity } = cartSlice.actions;
export const { calculatePrice } = cartSlice.actions;