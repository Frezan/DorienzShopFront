import axios from 'axios'

const url = "http://localhost:3146/api/"


axios.defaults.withCredentials = true


export const userProfil = async (payload:any)=>{
    return await axios.get(url+'user/profil/'+payload).then((res)=>{
        return res.data
    })
}