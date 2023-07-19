import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Main } from "../main/Main"







export const Routes = () => {
    return(
        <BrowserRouter >
        <Layout>
        <RoutesApp>
            <Route path="/" element={<Main/>} />
        </RoutesApp>
        </Layout>
        </BrowserRouter>
           
    )
}