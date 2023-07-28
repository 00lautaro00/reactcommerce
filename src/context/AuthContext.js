import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const users = useSelector(state => state.users.users);
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const  userLogin = new FormData(e.currentTarget);
        const isConfirm = users.find(user => user.email === userLogin.get("email") && user.password === userLogin.get("password"))
        setIsAuth( !!isConfirm );
        if(isAuth) navigate("/")
      };

    const datas ={
        user,
        isAuth,
        setIsAuth,
        setUser,
        handleSubmit
    }
    return <AuthContext.Provider value={datas} >{children}</AuthContext.Provider>
}

export {AuthProvider}
export default AuthContext