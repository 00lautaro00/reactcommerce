import { createSlice } from "@reduxjs/toolkit";
import { responseVideoGames } from "../../api/api";


const INITIAL_STATE = {
    value : responseVideoGames
}

export const videoGamesSlicer = createSlice({
    name:"videogames",
    initialState: INITIAL_STATE, 
    reducers: {
        stateController: (state) => {
            return{
                ...state, 
                state
            }
        }
    }
});
export const {stateController} = videoGamesSlicer.actions;
export default videoGamesSlicer.reducer