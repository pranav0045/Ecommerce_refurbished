import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name: "product",
        initialState: {
            data: [],
            filterData: [],
            userRequest:false,
        },

        reducers: {
            setProducts(state, action) {
                state.data = action.payload;
            },

            //filter according to the product category.
            filter_data(state,action) {
                const name = action.payload;
                state.filterData = state.data.filter((item) => {
                    return name === item.category;
                })
            },


            //filter company wise.
            company_wise_filter(state, action) {
                const value = action.payload;
                state.filterData = state.data.filter((item) => {
                    return value === item.companyName;
                })
            },

          //filter price wise.
            price_wise_filter(state,action){
                const value = action.payload;
                state.filterData = state.data.filter((item)=>{
                   return item.price <= value;
                })
            },


            //filter color wise.
            color_wise_filter(state,action){
              const value = action.payload;
              state.filterData = state.data.filter((item)=>{
                return item.color === value;
              })
            },

            //will set a state variable that validates userRequest for adding a product.
            setuserRequest(state,action){
                state.userRequest = action.payload;
            },

        },


    },
)

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
export const { filter_data } = productSlice.actions;
export const { company_wise_filter } = productSlice.actions;
export const {price_wise_filter} = productSlice.actions;
export const {color_wise_filter} = productSlice.actions;
export const {setuserRequest}=productSlice.actions;
export const {setadminResponse} = productSlice.actions;
