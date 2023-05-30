//const url = process.env.REACT_APP_URl;
import axios from 'axios'

const url = "http://localhost:3146/api/"


axios.defaults.withCredentials = true


export const login = async (data:any) => {
   return await axios.post(url+'user/login',data).then((res) => {
            return res.data
        })
}

export const createUser = async (data:any)=>{
    return await axios.post(url+'user/create',data).then((res)=>{
        return res.data
    })
}


export const logout = async ()=>{
    return await axios.get(url+'user/logout', {withCredentials:true}).then((res)=>{
        return res.data
    })
}


