import { Card, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"


export const CardCategory = ({ product }) => {
    return (
        <>
            {
                product.map(data => (

                    <Link key={data.id} to={`/products/${data.title}`}>
                    <Card  sx={{ width: 200, height: 200, margin:"1rem" }}>
                        <CardMedia
                            sx={{ width: 200, height: 200, boxShadow: "1px 1px 1px gray " }}
                            image={data.image}
                        />
                    </Card>
                    </Link>
                ))
            }

        </>
    )
}