import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    user: null
}


const slicerUsers = createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        controllerUsers:(state)=>{
            return{
                ...state,
                state
            }
        },
        setLoginUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        }
    }
})
export const { controllerUsers, setLoginUser } = slicerUsers.actions;
export default slicerUsers.reducer