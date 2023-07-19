import { configureStore } from "@reduxjs/toolkit";
import slicerCell from '../redux/slicerCell/cellSlicer'
import  electronicsSlicer  from "../redux/slicerElectronics/ElectronicsSlicer";
import  videoGamesSlicer  from "../redux/slicerVideoGames/slicerVideoGames";


export const store = configureStore({
    reducer:{
        cell: slicerCell,
        electronics: electronicsSlicer,
        videogames: videoGamesSlicer
    }
})