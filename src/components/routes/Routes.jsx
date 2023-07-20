import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Main } from "../main/Main"
import { Products } from "./products/Products"
import { Product } from "./product/Product"







export const Routes = () => {
    return(
        <BrowserRouter >
        <Layout>
        <RoutesApp>
            <Route path="/" element={<Main/>} />
            <Route path="/products" >
                <Route index element={<Products />}/>
                <Route path=":product" element={<Product />}/>
            </Route>
        </RoutesApp>
        </Layout>
        </BrowserRouter>
           
    )
}