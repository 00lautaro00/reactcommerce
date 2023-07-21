import {  useParams } from "react-router-dom"
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";




export const Product = () => {
    const params = useParams();
    const allProduct = useSelector(state => state.products.value)
    const product = allProduct.find(item => params.product.toLowerCase().replaceAll(" ", "") === item.title.toLowerCase().replaceAll(" ", ""));
    // console.log("params",params)
    // console.log("product", product)


    return (
      <Container sx={{display:"flex", justifyContent:"space-around", alignItems:"center", padding:"4rem 2rem"}}>
        <Box >
            <Box>
                <Typography variant="h5">
                    {product.title}
                </Typography>
            </Box>
            <Box>
                <Card>
                <Box>
                   <img src={product.image} alt={product.title}/>
                </Box>
                <CardContent >
                    <Typography variant="h5">
                        Description
                    </Typography>
                    <Typography variant="p">
                        {product.description}
                    </Typography>
                </CardContent>
                </Card>
            </Box>
            
        </Box>
        <Box>
            <Button  >
                add cart
            </Button>
        </Box>
      </Container>
    )
}