import axios from "axios"
import { url } from "../../../constans/url"
import { login } from "../../../endpoints/user"


export const loginUser = async ( email, password ) => {
    try{
        const response = await axios({
            method:'post',
            url:url+login,
            data:{
                username: email,
                password: password
            }
        })
        return response.data
      
    }catch(error){
        console.log(error)
    }
}