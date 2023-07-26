import { createSlice } from "@reduxjs/toolkit";
import { responseProduct, responseProductCategories, responseProductLimit } from "../../api/api";


const INITIAL_STATE = {
    value : responseProduct,
    limit : responseProductLimit,
    categories: responseProductCategories
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
        },
        filterProduct: (state) => {
            return{
                ...state,
                
            }
        }
    }
})

export const {stateController} = slicerProducts.actions;
export default slicerProducts.reducer