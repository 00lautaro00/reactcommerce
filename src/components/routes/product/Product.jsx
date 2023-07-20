import { useParams } from "react-router-dom"
import { allProduct } from "../../api/api";
import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";




export const Product = () => {
    const params = useParams();
    const {title} = allProduct.find(item => item.id === params.product)


    return (
        <Container >
            <Box>
                <Typography variant="h5">
                    {title}
                </Typography>
      
            </Box>
        </Container>
    )
}