import { Box, Button, Container } from "@mui/material";
import { CardCategory } from "./CardCategory";
import { useEffect, useState } from "react";





export const Categories = ({ product }) => {

    const [ categories, setCategories ] = useState([]);
    const [productCategory, setProductCategory] = useState(product)

   useEffect(() => {
    product.map(category => {
        if (!categories.some(cat => cat === category.category)) {
           setCategories([...categories, category.category])
       }
       return []
   });
   }, [product, categories]);

   const filterProductForCategory = (e) => {
    e.preventDefault();
    const productFiltered = product.filter ( pr => pr.category.toLowerCase().replaceAll(" ", "") === e.target.outerText.toLowerCase().replaceAll(" ", ""));
    setProductCategory(productFiltered)
   }
   const defaultProductForCategory = (e) => {
    e.preventDefault();
    setProductCategory(product)
   }

    return (
       <Container sx={{ background: "#f5f5f5", display: "flex",alignItems:"center", flexDirection:"column", padding:"2rem 0"}}>
         <Box>
            <Button onClick={(e) => defaultProductForCategory(e)}>
                All
            </Button>
            {
                categories.map((cat, i) => (
                    <Button key={i} onClick={(e) => filterProductForCategory(e)}>
                        {cat}
                    </Button>
                ))
            }
         </Box>
         <Box sx={{display:"flex" , flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "2rem 0" }}>
            <CardCategory product={productCategory} />
        </Box>
       </Container>
    )
}