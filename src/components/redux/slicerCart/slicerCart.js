import { createSlice } from "@reduxjs/toolkit"



const INITIAL_STATE = {
    cart: 0,
    cartProduct: []
}


const slicerCart = createSlice({
    name:"cart",
    initialState: INITIAL_STATE, 
    reducers: {
        stateController : (state) => {
            return{
                ...state,
                state
            }
        }, 
        cartCount: (state) => {
            return{
                ...state,
                cart: state.cart + 1
            }
        },
        cartState: (state, action) => {
            
            return{
                ...state,
                cartProduct:[ action.payload]
            }
        }
    }
})

export const {stateController, cartCount} = slicerCart.actions;
export default slicerCart.reducer