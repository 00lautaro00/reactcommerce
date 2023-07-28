import { createSlice } from "@reduxjs/toolkit";
import { responseUsers } from "../../api/api";

const INITIAL_STATE = {
    users: responseUsers
}


const slicerUsers = createSlice({
    name:"users",
    initialState:INITIAL_STATE,
    reducers:{
        controllerUsers:(state)=>{
            return{
                ...state,
                state
            }
        }
    }
})
export const { controllerUsers } = slicerUsers.actions;
export default slicerUsers.reducer