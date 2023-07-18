import { configureStore } from "@reduxjs/toolkit";
import slicerCell from '../redux/slicerCell/cellSlicer'


export const store = configureStore({
    reducer:{
        cell: slicerCell
    }
})