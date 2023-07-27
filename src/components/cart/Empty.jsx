import { Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Empty = () => {
    return (
        <Container sx={{display:"flex",padding:"1rem 4rem", alignItems:"center"}}>
            <Card sx={{width:"100%", display:"flex", padding:"0 1rem", marginRight:"1rem", border:"1px solid red"}} >
                <CardContent >
                    <Box >
                    <Typography>
                    </Typography>
                    <Typography color={"skyblue"}>
                      The cart is empty
                    </Typography>
                    </Box>
                </CardContent>
            </Card>
            <CardActions>
                <Button>
                   <Link to={"/"} style={{textDecoration:"none"}}>
                    Home
                   </Link>
                </Button>
            </CardActions>
        </Container>
    )
}