import { Container, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { CartProduct } from "./CartProduct";
import { Empty } from "./Empty";



export const Cart  = () => {
    window.scrollTo(0,0)
    const cart = useSelector(state => state.cart.cartProduct);

    return ( 
        <Container sx={{padding:"3rem 0"}}>
            <Typography variant="h4">
                Cart
            </Typography>
            {    
                !cart.length 
                ?
                 <Empty />
                :
                cart.map(product =>(
                    <CartProduct key={product.id} product={product}/>
                ))
            }

        </Container>
    )
}