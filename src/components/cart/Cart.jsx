import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"



export const Cart  = ({product}) => {
    return ( 
        <Box>
            <Card >
                <CardMedia sx={{width:50, height:50, borderRadius:50}} image={product.image} />
                <CardContent >
                    <Typography>
                        {product.title}
                    </Typography>
                    <Typography>
                        Add
                    </Typography>
                </CardContent>
            </Card>
            <Box>
                <Button>
                    See Cart
                </Button>
                <Button>
                    Buy
                </Button>
            </Box>

        </Box>
    )
}