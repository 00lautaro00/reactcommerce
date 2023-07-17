import { responseCell } from "../api/api"
import * as React from 'react';


export const Main = () => {


    return ( 
    <>
    {responseCell.result.map(data => (
        data
    ))}
    </>
    )
}





