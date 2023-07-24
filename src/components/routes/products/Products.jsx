import { Button, Container, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { Product } from "../product/Product"
import { useSelector } from "react-redux"
import { CarouselContainer } from "../../carousel/Carousel"


export const Products = () => {
const navigate = useNavigate()
const params = useParams();
const allProduct = useSelector(state => state.products.value)
const product = allProduct.find(item => params.product.toLowerCase().replaceAll(" ", "") === item.title.toLowerCase().replaceAll(" ", ""));
const category = allProduct.filter(categories => product.category.toLowerCase().replaceAll(" ", "") === categories.category.toLowerCase().replaceAll(" ",""));


    return(
        <Container sx={{padding:"3rem 0"}}>
            <Button onClick={() => navigate("/")} >
                volver
            </Button>
            <Product product={product}/>
            <Typography variant="h5">
                Similares
            </Typography>
            <CarouselContainer product={category} />
        </Container>
    )
}