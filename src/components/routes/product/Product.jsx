import { Box, Button, Card,CardMedia, Container, Rating, Typography } from "@mui/material";
import { handles } from "../../helpers/handles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartCount, cartState } from "../../redux/slicerCart/slicerCart";



export const Product = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {handleCart} = handles(dispatch,navigate,cartCount, cartState)
 

  return (
    <Container sx={{ padding: "4rem 2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>

        <Card key={product.id} sx={{maxWidth:400, width: "100%", height: 500, boxShadow: "none" }}>

          <CardMedia
            sx={{ height: 400 }}
            image={product.image}
          />

        </Card>


        <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding:"2rem 1rem",maxWidth:400 ,width:"100%" }}>
          <Box>
            <Typography variant="h6">
              {product.title}
            </Typography>
            <Typography variant="h4"  >
              ${product.price}
            </Typography>
          <Rating value={product.rating.rate} name="read-only" readOnly />
          {
            product.rating.count ? 
            <Typography variant="h5" color="skyblue">
            Stock Disponible
          </Typography>
          :
          <Typography variant="h5" color="red">
             Sin Stock
          </Typography>
          }
            <Typography variant="h6">
              avaible:{product.rating.count}
            </Typography>
          </Box>
          
          <Box sx={{display:"flex", flexDirection:"column"}}>
            
            <Button variant="contained" onClick={() => handleCart(product)}>
              Add cart
            </Button>
            <Button variant="contained">
              Buy
            </Button>
          </Box>
        </Card>
      </Box>
      <Box>
        <Typography variant="h4">
          Description
        </Typography>
        <Typography variant="h6">
          {product.description}
        </Typography>
      </Box>
    </Container>
  )
}