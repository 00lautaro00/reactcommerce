import { createSlice } from "@reduxjs/toolkit";
import { responseProduct } from "../../api/api";


const INITIAL_STATE = {
    value : responseProduct
}


export const slicerProducts = createSlice({
    name:"products",
    initialState:INITIAL_STATE,
    reducers: {
        stateController: (state) => {
            return{
                ...state, 
                state
            }
        }
    }
})

export const {stateController} = slicerProducts.actions;
export default slicerProducts.reducer