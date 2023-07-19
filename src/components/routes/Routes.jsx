import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Main } from "../main/Main"
import { Products } from "./products/Products"







export const Routes = () => {
    return(
        <BrowserRouter >
        <Layout>
        <RoutesApp>
            <Route path="/" element={<Main/>} />
            <Route path="/product" element={<Products />} />
        </RoutesApp>
        </Layout>
        </BrowserRouter>
           
    )
}