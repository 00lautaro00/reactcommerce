import { createSlice } from "@reduxjs/toolkit";
import { responseCell } from "../../api/api";

const INITIAL_STATE = {
    value: responseCell
}



export const cellSlicer = createSlice({
    name:"cell",
    initialState: INITIAL_STATE,
    reducers: {
        stateController : (state ) => {
            return{
                ...state,
                state
            }
        }
  
    }

});

export const {stateController} = cellSlicer.actions;

export default cellSlicer.reducer