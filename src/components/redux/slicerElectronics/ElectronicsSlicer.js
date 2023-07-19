import { createSlice } from "@reduxjs/toolkit";
import {responseElectronics} from '../../api/api'


const INITIAL_STATE = {
    value: responseElectronics
}

export const electronicsSlicer = createSlice({
    name:"electronics",
    initialState:INITIAL_STATE,
    reducers:{
        stateController: (state) => {
            return {
                ...state, 
                state
            }
        }
    }
})
export const {stateController} = electronicsSlicer.actions;
export default electronicsSlicer.reducer