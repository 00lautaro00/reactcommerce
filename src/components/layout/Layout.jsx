import { Footer } from "../footer/Footer"
import { Nav } from "../nav/Nav"


export const Layout = ({children}) => {

    return (<>
    <Nav /> 
    {children}
    <Footer />
    </>)
}