import { useSelector } from "react-redux"
import { CardProduct } from "../card/Card";



export const Main = () => {
    const state = useSelector(state => state.cell.value.results);
    return ( 
    <>
    <div style={{display:"flex", flexWrap: "wrap", padding:"4rem 10rem", alignItems:"center", justifyContent:"center", background:"#f5f5f5"}}>
        {
        state?.slice(0,12).map(data => (
                <CardProduct key={data.id} data={data}/>
            ))
        }
    </div>
    </>
    )
}





