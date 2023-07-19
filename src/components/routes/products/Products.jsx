import { Button, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"


export const Products = () => {
const navigate = useNavigate()

    return(
        <Container sx={{padding:"3rem 0"}}>
            <Button onClick={() => navigate("/")} >
                volver
            </Button>
        </Container>
    )
}