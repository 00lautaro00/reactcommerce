import { Box, Button, Card,CardMedia, Container, Rating, Typography } from "@mui/material";



export const Product = ({product}) => {
 

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
          <Typography variant="h5" color="skyblue">
              Stock Disponible
            </Typography>
            <Typography variant="h6">
              avaible:{product.rating.count}
            </Typography>
          </Box>
          
          <Box sx={{display:"flex", flexDirection:"column"}}>
            
            <Button variant="contained">
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