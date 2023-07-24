import { Box, Typography } from "@mui/material";
import { CardCategory } from "./CardCategory";
import { Link } from "react-router-dom";





export const Categories = ({ product }) => {
    let categoryTemp = []
    const categories = product.map(category => {
        if (!categoryTemp.some(cat => cat === category.category)) {
            categoryTemp = [...categoryTemp, category.category]
        }
        return categoryTemp

    });
    console.log("categories", categories)
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", background: "#f5f5f5", justifyContent: "center", alignItems: "center", padding: "2rem 0" }}>
            <CardCategory product={product} />
        </Box>
    )
}