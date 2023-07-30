import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../components/utils/login/login";
import { setLoginUser } from "../components/redux/slicerUsers/slicersUser";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const  userLoginData = new FormData(e.currentTarget);
        const username = userLoginData.get("email");
        const password = userLoginData.get("password");
        const user = await loginUser(username,password );
        console.log("user", user)
        if(user){
            dispatch(setLoginUser({
                token:user.token,
                username: username
            }))
             navigate("/")
        }
      };

    const data ={
        handleSubmit
    }
    return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>
}

export {AuthProvider}
export default AuthContext