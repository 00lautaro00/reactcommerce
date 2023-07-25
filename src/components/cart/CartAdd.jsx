import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"



export const CartAdd  = ({product}) => {


    return ( 
        <Container sx={{display:"flex",padding:"4rem", alignItems:"center"}}>
            <Card sx={{width:"100%", display:"flex", padding:"0 1rem", marginRight:"1rem"}} >
                <CardMedia sx={{width:50, height:50, borderRadius:50}} image={product.image} />
                <CardContent >
                    <Box  >
                    <Typography>
                        {product.title}
                    </Typography>
                    <Typography color={"skyblue"}>
                        Aggregated
                    </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box sx={{display:"flex", flexDirection:"column", width:"20%"}}>
                <Button variant="outlined" size="small">
                    See Cart
                </Button>
                <Button variant="outlined" size="small">
                    Buy
                </Button>
            </Box>

        </Container>
    )
}