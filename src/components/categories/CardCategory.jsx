import { Card, CardMedia } from "@mui/material"


export const CardCategory = ({ product }) => {
    return (
        <>
            {
                product.map(data => (

                    <Card key={data.id} sx={{ width: 200, height: 200, margin:"1rem" }}>
                        <CardMedia
                            sx={{ width: 200, height: 200, boxShadow: "1px 1px 1px gray " }}
                            image={data.image}
                        />
                    </Card>
                ))
            }

        </>
    )
}